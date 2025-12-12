// src/components/List/FileDeleteButton.tsx
import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { DeleteFilePopup } from "./DeleteFilePopup";

interface Props {
  s3Key: string;
  fileName: string;
  onDeleted?: () => void;
}

export const FileDeleteButton: React.FC<Props> = ({ s3Key, fileName, onDeleted }) => {
  const user = useAuthStore((state) => state.user);
  const userIdToken = user?.id_token || "";
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setConfirmOpen(true)}
        style={{
          padding: "6px 12px",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>

      {confirmOpen && (
        <DeleteFilePopup
          s3Key={s3Key}
          fileName={fileName}
          userIdToken={userIdToken}
          onClose={() => setConfirmOpen(false)}
          onDeleted={onDeleted}
        />
      )}
    </>
  );
};
