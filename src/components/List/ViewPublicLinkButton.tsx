// src/components/List/FileDeleteButton.tsx
import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { DeleteFilePopup } from "./DeleteFilePopup";

interface ViewPublicButtonProps {
  s3Key: string;
  fileName: string;
  isPublic: boolean;
  onView?: () => void;
}

export const ViewPublicLinkButton: React.FC<ViewPublicButtonProps> = ({ s3Key, fileName, isPublic, onView }) => {
  const user = useAuthStore((state) => state.user);
  const userIdToken = user?.id_token || "";
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isPublicFile, setIsPublicFile] = useState(isPublic)

  return (
    <>
      <button
        onClick={() => setConfirmOpen(true)}
        style={{
          padding: "6px 12px",
          backgroundColor: isPublicFile? "#e7902c": "grey",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }
      }
        disabled={!isPublicFile}
      >
        View
      </button>

      {confirmOpen && (
        <ViewPublicLinkPopUp
          s3Key={s3Key}
          fileName={fileName}
          userIdToken={userIdToken}
          onClose={() => setConfirmOpen(false)}
          onView={onView}
        />
      )}
    </>
  );
};


interface ViewPublicLinkPopUpProps {
  s3Key: string;
  fileName: string;
  userIdToken: string;
  onClose: () => void;
  onView?: () => void;
}

export const ViewPublicLinkPopUp: React.FC<ViewPublicLinkPopUpProps> = ({ s3Key, fileName, userIdToken, onClose, onView }) => {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);


  const handleCopyButton = async () => {
    setLoading(true);
    try {
    //   await deleteFile(s3Key, userIdToken);
      await navigator.clipboard.writeText("Clicked Copy");
      onView?.();
      setCopied(true)
    } catch (err: any) {
      console.error("Copy to Clipboard failed:", err);
      // alert(`Failed to delete file: ${err.message || err}`);
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
        <h2 style={{ fontSize: "20px", fontWeight: 600 }}>Share link</h2>
        <p>Share link of  <strong>{fileName}</strong> are as follow: </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero odio tempore minus ullam accusantium voluptate maiores perspiciatis ratione illo maxime magnam id quisquam totam aut distinctio ut quos, labore temporibus!</p>


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
            onClick={handleCopyButton}
            disabled={loading}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#e7902c",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {copied ? "Copied on Clipboard!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

