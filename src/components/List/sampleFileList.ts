export interface FileListType {
  fileName: string;
  userId: string;
  fileId: string;
  createdAt: number;
  contentType: string;
  s3Key: string;
  fieldId: string;
  isShared?: "Active" | "Inactive";
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
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },
  {
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },
  {
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },
  {
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },
  {
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },
  {
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },
  {
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },
  {
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },

  {
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },
  {
    fileName: "Test file.txt",
    userId: "e40814c8-80b1-705e-3281-5fde583cdcc8",
    fileId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    createdAt: 1765491908,
    contentType: "text/plain",
    s3Key: "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
    fieldId:
      "e40814c8-80b1-705e-3281-5fde583cdcc8/20251211T222507_Test file.txt",
  },
];
