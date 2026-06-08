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
}

export const PublicToggleButton: React.FC<Props> = ({ s3Key, fileName }) => {
  const user = useAuthStore((state) => state.user);
  const [isBaconEnabled, setIsBaconEnabled] = useState(false);
  const userIdtoken = user?.id_token || "";

  const handleToggleChange = async () => {
    try {
    
    // await startFileDownload(s3Key, userIdtoken);
    // console.log("Toggle Public!")
    setIsBaconEnabled(!isBaconEnabled)
      
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download file");
    }
  };


  return (
    <>
        <Toggle
          id="bacon-status"
          checked={isBaconEnabled}
          onChange={handleToggleChange}
        />
    </>
  );
};
