import { getEnv } from "../env";
import { useAuthStore } from "../store/useAuthStore";

const FILES_API_ENDPOINT = getEnv("FILES_API_ENDPOINT");

export const tooglePublic = async (
s3Key: string, isPublic: boolean, userIdToken:string
) => {
  const res = await fetch(
    `${FILES_API_ENDPOINT}/file/share/publicShare/toggle`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userIdToken}`,
      },
      body: JSON.stringify({ s3Key, isPublic }),
    },
  );

  if (!res.ok) {
    const data = await res.json();
    console.log("Failed : ", res.json)
    throw new Error(data.message || "Failed to toogle Public");
  }

  return await res.json();
};

