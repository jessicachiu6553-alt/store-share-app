// src/components/UploadPopup.tsx

import { useEffect, useState } from "react";
import { getPresignedUploadUrl, uploadFileToPresignedUrl } from "../api/uploadFileAPI";
import { useAuthStore } from "../store/useAuthStore";
import { useFileStore } from "../store/useFileStore";

interface Props {
  open: boolean;
  onClose: () => void;
}

const UploadPopup = ({ open, onClose }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [s3Key, setS3Key] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const refreshKey = useFileStore((state) => state.refreshKey);
  const triggerRefresh = useFileStore((state) => state.triggerRefresh);


  const idToken = useAuthStore((s) => s.user?.id_token);

  if (!open) return null;

  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setS3Key(null); // reset preview
    }
  };

  const handleUpload = async () => {
    if (!file || !idToken) return;

    try {
      setIsUploading(true);

      // 1️⃣ Request presigned upload URL
      const presigned = await getPresignedUploadUrl(file.name, file.type, idToken);
      setS3Key(presigned.s3Key);

      // 2️⃣ Upload file to S3
      await uploadFileToPresignedUrl(presigned.uploadUrl, file);

      alert("Upload completed!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    } finally {
      setIsUploading(false);
      setS3Key(null);
      setFile(null);
      triggerRefresh();
    }
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2>Upload File</h2>

        <input type="file" onChange={handleSelectFile} />

        {file && <p>Selected: <b>{file.name}</b></p>}
        {s3Key? <>${s3Key}</> :<></>}
        {s3Key && <p>S3 Key: <code>{s3Key}</code></p>}

        <div style={styles.actions}>
          <button onClick={onClose} disabled={isUploading}>Cancel</button>
          <button 
            onClick={handleUpload} 
            disabled={!file || isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPopup;

const styles: Record<string, React.CSSProperties> = {
  backdrop: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 999,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
  },
  actions: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
};
