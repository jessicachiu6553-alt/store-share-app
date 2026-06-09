// src/components/List/FileDeleteButton.tsx
import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { DeleteFilePopup } from "./DeleteFilePopup";
import { getPublicDownloadLink } from "../../api/getPublicDownloadLink";

interface ViewPublicButtonProps {
  s3Key: string;
  fileName: string;
  // isPublic: boolean;
  isFilePublic: boolean;
  setIsFilePublic: (value: boolean) => void;
  // handleOnView?: () => void;
  fieldId: string;
}

export const ViewPublicLinkButton: React.FC<ViewPublicButtonProps> = ({
  s3Key,
  fileName,
  isFilePublic,
  // handleOnView,
  setIsFilePublic,
  fieldId,
}) => {
  const user = useAuthStore((state) => state.user);
  const userIdToken = user?.id_token || "";
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [publicDownloadLink, setPublicDownloadLink] = useState("");

  const onClickViewLink = async () => {
    const response = await getPublicDownloadLink(fieldId);

    console.log("Url: ", response.downloadUrl);

    setPublicDownloadLink(response.downloadUrl);

    setConfirmOpen(true);
  };

  return (
    <>
      <button
        onClick={onClickViewLink}
        style={{
          padding: "6px 12px",
          backgroundColor: isFilePublic ? "#e7902c" : "grey",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        disabled={!isFilePublic}
      >
        View
      </button>

      {confirmOpen && (
        <ViewPublicLinkPopUp
          s3Key={s3Key}
          fileName={fileName}
          userIdToken={userIdToken}
          onClose={() => setConfirmOpen(false)}
          publicDownloadLink={publicDownloadLink}
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
  publicDownloadLink: string;
}

export const ViewPublicLinkPopUp: React.FC<ViewPublicLinkPopUpProps> = ({
  s3Key,
  fileName,
  onClose,
  publicDownloadLink,
}) => {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyButton = async () => {
    setLoading(true);
    try {
      await navigator.clipboard.writeText(publicDownloadLink);
      setCopied(true);
    } catch (err: any) {
      console.error("Copy to Clipboard failed:", err);
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
        <p>
          Share link of <strong>{fileName}</strong> are as follow:{" "}
        </p>

        <div>
          <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            {publicDownloadLink}
          </p>
        </div>

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}
        >
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
