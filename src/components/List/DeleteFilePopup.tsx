// src/components/List/DeleteFilePopup.tsx
import React, { useState } from "react";
import { deleteFile } from "../../api/deleteFileAPI";

interface Props {
  s3Key: string;
  fileName: string;
  userIdToken: string;
  onClose: () => void;
  onDeleted?: () => void;
}

export const DeleteFilePopup: React.FC<Props> = ({ s3Key, fileName, userIdToken, onClose, onDeleted }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteFile(s3Key, userIdToken);
      onDeleted?.();
      alert(`${fileName} deleted successfully`);
      onClose();
    } catch (err: any) {
      console.error("Delete failed:", err);
      alert(`Failed to delete file: ${err.message || err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: 600 }}>Confirm Delete</h2>
        <p>Are you sure you want to delete <strong>{fileName}</strong>?</p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
          <button
            onClick={onClose}
            disabled={loading}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={loading}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#e74c3c",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};
