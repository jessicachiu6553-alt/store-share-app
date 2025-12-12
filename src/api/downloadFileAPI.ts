// src/api/downloadAPI.ts

import { getEnv } from "../env";

const FILES_API_ENDPOINT = getEnv("FILES_API_ENDPOINT");

export interface DownloadUrlResponse {
  downloadUrl: string;
}

export async function getPresignedDownloadUrl(
  s3Key: string,
  userIdToken: string
): Promise<DownloadUrlResponse> {
  const res = await fetch(`${FILES_API_ENDPOINT}/file/download-url`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userIdToken}`,
    },
    body: JSON.stringify({ s3Key }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("getPresignedDownloadUrl failed: " + err);
  }

  return res.json();
}




export async function downloadFileFromUrl(url: string, filename?: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to download file");
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = objectUrl;

  // Optional: use filename from API or fallback
  link.download = filename || "download";

  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}



// --------- NEW FUNCTION: Automatically download the file ----------
export const downloadFileToBrowser = async (downloadUrl: string, filename?: string) => {
  const response = await fetch(downloadUrl);

  if (!response.ok) {
    throw new Error("Failed to download file");
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);

  // Create a hidden link and trigger download
  const a = document.createElement("a");
  a.href = objectUrl;

  // If your backend does not pass filename, default to key or "download"
  a.download = filename || "download";

  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(objectUrl);
};

// --------- Combined helper for convenience ----------
export const startFileDownload = async (key: string, token: string) => {
  const { downloadUrl } = await getPresignedDownloadUrl(key, token);

  // auto-detect filename from S3 key
  const extractedName = key.split("/").pop();

  await downloadFileToBrowser(downloadUrl, extractedName);
};