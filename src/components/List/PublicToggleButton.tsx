import React, { useEffect } from "react";
import { startFileDownload } from "../../api/downloadFileAPI";
import { useAuthStore } from "../../store/useAuthStore";
import { useState } from 'react';
import Toggle from 'react-toggle';
//@ts-ignore
import "react-toggle/style.css"; // Requires styles to render correctly
import { tooglePublic } from "../../api/tooglePublicAPI";
import { useFileStore } from "../../store/useFileStore";


interface Props {
  s3Key: string;
  fileName: string;
  isFilePublic: boolean;
  setIsFilePublic: (value:boolean)=>void;
}

export const PublicToggleButton: React.FC<Props> = ({ s3Key, fileName, isFilePublic, setIsFilePublic}) => {
  const user = useAuthStore((state) => state.user);
  const userIdtoken = user?.id_token || "";

  
  

  const handleToggleChange = async () => {
    try {
    
      const response = await tooglePublic(s3Key,!isFilePublic, userIdtoken)
      // console.log("Handle Toogle Change response: ",{response})
      // setIsPublicFile(!isPublicFile)
      setIsFilePublic(!isFilePublic)
      
    } catch (err) {
      console.error("Toggle Public failed:", err);
      alert("Toggle Public failed!");
    }
  };


  return (
    <>
        <Toggle
          id="bacon-status"
          checked={isFilePublic}
          onChange={handleToggleChange}
        />
    </>
  );
};
