import { getEnv } from "../env";
import { useAuthStore } from "../store/useAuthStore";

const FILES_API_ENDPOINT = getEnv("FILES_API_ENDPOINT");

export const getPublicDownloadLink = async (
fieldId: string
) => {
  const res = await fetch(
    `${FILES_API_ENDPOINT}/file/share/publicShare/download-url`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${userIdToken}`,
      },
      body: JSON.stringify({ fieldId }),
    },
  );

  if (!res.ok) {
    const data = await res.json();
    console.log("Failed : ", res.json)
    throw new Error(data.message || "Failed to get Public Download Link");
  }

  return await res.json();
};



