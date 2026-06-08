export interface FileListType {
  fileName: string;
  userId: string;
  fileId: string;
  createdAt: number;
  isPublic: boolean;
  contentType: string;
  s3Key: string;
  fieldId: string;
  isShared?: "Active" | "Inactive";
  shareToken:string;
  url?: string;
}

export const sampleFileListKeyList: string[] = [
  "fileName",
  "userId",
  "fileId",
  "createdAt",
  "contentType",
  "s3Key",
  "fieldId",
  "isShared",
];

export const sampleFileList: FileListType[] = [
        {
            "fileName": "testFile_3.txt",
            "fileId": "e40814c8-80b1-705e-3281-5fde583cdcc8/20260414T023156_testFile_3.txt",
            "userId": "e40814c8-80b1-705e-3281-5fde583cdcc8",
            "createdAt": 1776133916,
            "isPublic": true,
            "contentType": "text/plain",
            "shareToken": "5c341abb-8d65-4fbf-b0ce-0ca82d76c1ed",
            "fieldId": "e40814c8-80b1-705e-3281-5fde583cdcc8/20260414T023156_testFile_3.txt",
            "s3Key": "e40814c8-80b1-705e-3281-5fde583cdcc8/20260414T023156_testFile_3.txt"
        },
        {
            "fileName": "testFile_2.txt",
            "userId": "e40814c8-80b1-705e-3281-5fde583cdcc8",
            "fileId": "e40814c8-80b1-705e-3281-5fde583cdcc8/20251212T142122_testFile_2.txt",
            "createdAt": 1765549282,
            "isPublic": false,
            "contentType": "text/plain",
            "shareToken": "",
            "s3Key": "e40814c8-80b1-705e-3281-5fde583cdcc8/20251212T142122_testFile_2.txt",
            "fieldId": "e40814c8-80b1-705e-3281-5fde583cdcc8/20251212T142122_testFile_2.txt"
        },
        {
            "fileName": "tiger.jpg",
            "userId": "e40814c8-80b1-705e-3281-5fde583cdcc8",
            "fileId": "e40814c8-80b1-705e-3281-5fde583cdcc8/20251213T012048_tiger.jpg",
            "createdAt": 1765588848,
            "isPublic": false,
            "contentType": "image/jpeg",
            "shareToken": "",
            "s3Key": "e40814c8-80b1-705e-3281-5fde583cdcc8/20251213T012048_tiger.jpg",
            "fieldId": "e40814c8-80b1-705e-3281-5fde583cdcc8/20251213T012048_tiger.jpg"
        },
        {
            "fileName": "testFile_4.txt",
            "userId": "e40814c8-80b1-705e-3281-5fde583cdcc8",
            "fileId": "e40814c8-80b1-705e-3281-5fde583cdcc8/20260516T211410_testFile_4.txt",
            "createdAt": 1778966050,
            "isPublic": false,
            "contentType": "text/plain",
            "shareToken": "",
            "s3Key": "e40814c8-80b1-705e-3281-5fde583cdcc8/20260516T211410_testFile_4.txt",
            "fieldId": "e40814c8-80b1-705e-3281-5fde583cdcc8/20260516T211410_testFile_4.txt"
        }
    ]
