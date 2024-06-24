// @ts-ignore
/* eslint-disable */
import request from './request.js';

/** 此处后端没有提供注释 POST /api/FileManagement/CreateFolder */
export async function createFolder(body: API.FolderRequest, options?: { [key: string]: any }) {
  return request<any>('/api/FileManagement/CreateFolder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/FileManagement/DeleteFile */
export async function deleteFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFileParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/FileManagement/DeleteFile', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/FileManagement/DownloadFile */
export async function downloadFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/FileManagement/DownloadFile', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/FileManagement/GetFileTree */
export async function getFileTree(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFileTreeParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/FileManagement/GetFileTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/FileManagement/getUploadToken */
export async function getUploadToken(options?: { [key: string]: any }) {
  return request<any>('/api/FileManagement/getUploadToken', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/FileManagement/SearchFileList */
export async function searchFileList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchFileListParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/FileManagement/SearchFileList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/FileManagement/UploadFile */
export async function uploadFile(
  body: {
    FileKey?: string;
  },
  File?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (File) {
    formData.append('File', File);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<any>('/api/FileManagement/UploadFile', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}
