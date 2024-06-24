// @ts-ignore
/* eslint-disable */
import request from './request.js'

/** 改变文件所在目录 POST /api/FileInfo/changeFileFolder */
export async function changeFileFolder(body: {
    fileIds?: string,
    filePid?: string,
  },
  options ?: {[key: string]: any}
) {
  const formData = new FormData();
  
  Object.keys(body).forEach(ele => {
    
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
  
  return request<any>('/api/FileInfo/changeFileFolder', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 创建下载链接 POST /api/FileInfo/createDownloadUrl/${param0} */
export async function createDownloadUrl(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createDownloadUrlParams
    ,
  options ?: {[key: string]: any}
) {
  const { 'fileId': param0, 
  ...queryParams
  } = params;
  return request<any>(`/api/FileInfo/createDownloadUrl/${param0}`, {
  method: 'POST',
    params: {...queryParams,},
    ...(options || {}),
  });
}

/** 删除文件 POST /api/FileInfo/delFile */
export async function delFile(body: {
    fileIds?: string,
  },
  options ?: {[key: string]: any}
) {
  const formData = new FormData();
  
  Object.keys(body).forEach(ele => {
    
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
  
  return request<any>('/api/FileInfo/delFile', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 下载文件 GET /api/FileInfo/download/${param0} */
export async function download(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadParams
    ,
  options ?: {[key: string]: any}
) {
  const { 'code': param0, 
  ...queryParams
  } = params;
  return request<any>(`/api/FileInfo/download/${param0}`, {
  method: 'GET',
    params: {...queryParams,},
    ...(options || {}),
  });
}

/** 预览文件 GET /api/FileInfo/getFile/${param0} */
export async function getFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFileParams
    ,
  options ?: {[key: string]: any}
) {
  const { 'fileId': param0, 
  ...queryParams
  } = params;
  return request<any>(`/api/FileInfo/getFile/${param0}`, {
  method: 'GET',
    params: {...queryParams,},
    ...(options || {}),
  });
}

/** 获取目录信息 POST /api/FileInfo/getFolderInfo */
export async function getFolderInfo(body: {
    path?: string,
  },
  options ?: {[key: string]: any}
) {
  const formData = new FormData();
  
  Object.keys(body).forEach(ele => {
    
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
  
  return request<any>('/api/FileInfo/getFolderInfo', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 预览图片 GET /api/FileInfo/getImage/${param0}/${param1} */
export async function getImage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getImageParams
    ,
  options ?: {[key: string]: any}
) {
  const { 'imageFolder': param0, 'imageName': param1, 
  ...queryParams
  } = params;
  return request<any>(`/api/FileInfo/getImage/${param0}/${param1}`, {
  method: 'GET',
    params: {...queryParams,},
    ...(options || {}),
  });
}

/** 查询指定目录下的所以文件夹 POST /api/FileInfo/loadAllFolder */
export async function loadAllFolder(body: {
    filePid?: string,
    currentFileIds?: string,
  },
  options ?: {[key: string]: any}
) {
  const formData = new FormData();
  
  Object.keys(body).forEach(ele => {
    
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
  
  return request<any>('/api/FileInfo/loadAllFolder', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 分页查询文件信息 POST /api/FileInfo/loadDataList */
export async function loadDataList(body: {
    FileId?: string,
    FileIdFuzzy?: string,
    UserId?: string,
    UserIdFuzzy?: string,
    FileMd5?: string,
    FileMd5Fuzzy?: string,
    FilePid?: string,
    FilePidFuzzy?: string,
    FileSize?: number,
    FileName?: string,
    FileNameFuzzy?: string,
    FileCover?: string,
    FileCoverFuzzy?: string,
    FilePath?: string,
    FilePathFuzzy?: string,
    CreateTime?: string,
    CreateTimeStart?: string,
    CreateTimeEnd?: string,
    LastUpdateTime?: string,
    LastUpdateTimeStart?: string,
    LastUpdateTimeEnd?: string,
    FolderType?: number,
    FileCategory?: number,
    FileType?: number,
    Status?: number,
    RecoveryTime?: string,
    RecoveryTimeStart?: string,
    RecoveryTimeEnd?: string,
    DelFlag?: number,
    FileIdArray?: string[],
    FilePidArray?: string[],
    ExcludeFileIdArray?: string[],
    QueryExpire?: boolean,
    QueryNickName?: boolean,
    SimplePage.PageNo?: number,
    SimplePage.CountTotal?: number,
    SimplePage.PageSize?: number,
    SimplePage.PageTotal?: number,
    SimplePage.Start?: number,
    SimplePage.End?: number,
    PageNo?: number,
    PageSize?: number,
    OrderBy?: string,
    category?: string,
  },
  options ?: {[key: string]: any}
) {
  const formData = new FormData();
  
  Object.keys(body).forEach(ele => {
    
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
  
  return request<any>('/api/FileInfo/loadDataList', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 新建文件夹 POST /api/FileInfo/newFolder */
export async function newFolder(body: {
    filePid?: string,
    fileName?: string,
  },
  options ?: {[key: string]: any}
) {
  const formData = new FormData();
  
  Object.keys(body).forEach(ele => {
    
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
  
  return request<any>('/api/FileInfo/newFolder', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 重命名 POST /api/FileInfo/rename */
export async function rename(body: {
    fileId?: string,
    fileName?: string,
  },
  options ?: {[key: string]: any}
) {
  const formData = new FormData();
  
  Object.keys(body).forEach(ele => {
    
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
  
  return request<any>('/api/FileInfo/rename', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 预览视频 GET /api/FileInfo/ts/getVideoInfo/${param0} */
export async function getVideoInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVideoInfoParams
    ,
  options ?: {[key: string]: any}
) {
  const { 'fileId': param0, 
  ...queryParams
  } = params;
  return request<any>(`/api/FileInfo/ts/getVideoInfo/${param0}`, {
  method: 'GET',
    params: {...queryParams,},
    ...(options || {}),
  });
}

/** 上传文件 POST /api/FileInfo/uploadFile */
export async function uploadFile(body: {
    fileId?: string,
    ContentType?: string,
    ContentDisposition?: string,
    Headers?: Record<string, any>,
    Length?: number,
    Name?: string,
    FileName?: string,
    fileName?: string,
    filePid?: string,
    fileMd5?: string,
    chunkIndex?: number,
    chunks?: number,
  },
  options ?: {[key: string]: any}
) {
  const formData = new FormData();
  
  Object.keys(body).forEach(ele => {
    
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
  
  return request<any>('/api/FileInfo/uploadFile', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

