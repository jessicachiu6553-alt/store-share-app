// src/api/deleteFileAPI.ts

import { getEnv } from "../env";

const FILES_API_ENDPOINT = getEnv("FILES_API_ENDPOINT");

export const deleteFile = async (s3Key: string, userIdToken: string) => {
const res = await fetch(`${FILES_API_ENDPOINT}/file`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userIdToken}`,
  },
  body: JSON.stringify({ s3Key }),
});

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Failed to delete file");
  }

  return await res.json();
};
