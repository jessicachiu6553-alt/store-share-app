import React from "react";
import { startFileDownload } from "../../api/downloadFileAPI";
import { useAuthStore } from "../../store/useAuthStore";
import { useState } from 'react';
import Toggle from 'react-toggle';
//@ts-ignore
import "react-toggle/style.css"; // Requires styles to render correctly


interface Props {
  s3Key: string;
  fileName: string;
  isPublic: boolean;
}

export const PublicToggleButton: React.FC<Props> = ({ s3Key, fileName, isPublic }) => {
  const user = useAuthStore((state) => state.user);
  const userIdtoken = user?.id_token || "";
  const [isPublicFile, setIsPublicFile] = useState(isPublic)
  

  const handleToggleChange = async () => {
    try {
    
    // await startFileDownload(s3Key, userIdtoken);
    // console.log(`S3 Keys: ${s3Key}`)
    setIsPublicFile(!isPublicFile)
      
    } catch (err) {
      console.error("Toggle Public failed:", err);
      alert("Toggle Public failed!");
    }
  };


  return (
    <>
        <Toggle
          id="bacon-status"
          checked={isPublicFile}
          onChange={handleToggleChange}
        />
    </>
  );
};
