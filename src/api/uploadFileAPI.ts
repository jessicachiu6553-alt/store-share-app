// src/api/uploadAPI.ts
import { getEnv } from "../env";

const FILES_API_ENDPOINT = getEnv("FILES_API_ENDPOINT");

export interface PresignedUploadResponse {
  uploadUrl: string;
  s3Key: string;
}

export async function getPresignedUploadUrl(
  filename: string,
  contentType: string,
  idToken: string
): Promise<PresignedUploadResponse> {
  const res = await fetch(`${FILES_API_ENDPOINT}/file/upload-url`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({ filename, contentType }),
  });

   // Read body only once
  const text = await res.clone().text();

  if (!res.ok) {
    throw new Error(`Failed to get presigned URL: ${text}`);
  }

  try {
    const data: PresignedUploadResponse = JSON.parse(text);
    return data;
  } catch (err) {
    throw new Error(`Invalid JSON from presigned URL API: ${text}`);
  }
}

export async function uploadFileToPresignedUrl(
  uploadUrl: string,
  file: File
): Promise<Response> {
  const res = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!res.ok) {
    throw new Error("uploadFileToPresignedUrl failed: " + (await res.text()));
  }

  return res;
}





