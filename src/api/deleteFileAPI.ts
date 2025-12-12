// src/api/deleteFileAPI.ts
export const deleteFile = async (s3Key: string, userIdToken: string) => {
  const res = await fetch(
    "https://xnbhptkt69.execute-api.us-east-1.amazonaws.com/dev/file",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userIdToken}`,
      },
      body: JSON.stringify({ s3Key }),
    }
  );

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Failed to delete file");
  }

  return await res.json();
};
