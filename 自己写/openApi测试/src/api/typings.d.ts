declare namespace API {
  type checkCodeParams = {
    type?: number;
  };

  type createDownloadUrlParams = {
    userId: string;
    fileId: string;
  };

  type createDownloadUrlParams = {
    fileId: string;
  };

  type createDownloadUrlParams = {
    shareId: string;
    fileId: string;
  };

  type deleteFileParams = {
    fileKey?: string;
  };

  type downloadFileParams = {
    fileKey?: string;
  };

  type downloadParams = {
    code: string;
  };

  type downloadParams = {
    code: string;
  };

  type downloadParams = {
    code: string;
  };

  type FolderRequest = {
    folderKey?: string;
  };

  type getAvatarParams = {
    userId: string;
  };

  type getFileParams = {
    userId: string;
    fileId: string;
  };

  type getFileParams = {
    fileId: string;
  };

  type getFileParams = {
    shareId: string;
    fileId: string;
  };

  type getFileTreeParams = {
    prefix?: string;
  };

  type getImageParams = {
    imageFolder: string;
    imageName: string;
  };

  type getVideoInfoParams = {
    userId: string;
    fileId: string;
  };

  type getVideoInfoParams = {
    fileId: string;
  };

  type getVideoInfoParams = {
    shareId: string;
    fileId: string;
  };

  type qqloginParams = {
    callbackUrl?: string;
  };

  type searchFileListParams = {
    search?: string;
  };

  type test11Params = {
    category?: string;
  };
}
