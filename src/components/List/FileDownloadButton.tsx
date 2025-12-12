import React from "react";
import { startFileDownload } from "../../api/downloadFileAPI";
import { useAuthStore } from "../../store/useAuthStore";

interface Props {
  s3Key: string;
  fileName: string;
}

export const FileDownloadButton: React.FC<Props> = ({ s3Key, fileName }) => {
  const user = useAuthStore((state) => state.user);
  const userIdtoken = user?.id_token || "";

  const handleDownload = async () => {
    try {
    //   const { downloadUrl } = await getDownloadFileUrl(s3Key, userIdtoken);


    //   // Trigger browser download
    //   const link = document.createElement("a");
    //   link.href = downloadUrl;
    //   link.download = fileName; // Suggested filename to browser
    //   link.click();
    
    await startFileDownload(s3Key, userIdtoken);
      
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download file");
    }
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        padding: "6px 12px",
        backgroundColor: "#4a90e2",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Download
    </button>
  );
};
