// src/api/filesAPI.ts

import { getEnv } from "../env";

const FILES_API_ENDPOINT = getEnv("FILES_API_ENDPOINT");

export interface FileListType {
  fileName: string;
  userId: string;
  fileId: string;
  createdAt: number;
  contentType: string;
  s3Key: string;
  fieldId: string;
  isShared?: "Active" | "Inactive";
  url?: string;
}

export interface FilesResponse {
  files: FileListType[];
}

export async function getFiles(userIdToken: string): Promise<FilesResponse> {
  if (!FILES_API_ENDPOINT) {
    throw new Error("FILES_API_ENDPOINT is missing in env");
  }

  const res = await fetch(`${FILES_API_ENDPOINT}/files`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userIdToken}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error("getFiles failed: " + text);
  }

//   if(res.ok){
//     console.log(res.json())
//   }

  return res.json();
}
