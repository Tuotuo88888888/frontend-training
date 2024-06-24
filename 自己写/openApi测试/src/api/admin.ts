// @ts-ignore
/* eslint-disable */
import request from './request.js'

/** 创建下载链接 POST /api/Admin/createDownloadUrl/${param0}/${param1} */
export async function createDownloadUrl(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createDownloadUrlParams
    ,
  options ?: {[key: string]: any}
) {
  const { 'userId': param0, 'fileId': param1, 
  ...queryParams
  } = params;
  return request<any>(`/api/Admin/createDownloadUrl/${param0}/${param1}`, {
  method: 'POST',
    params: {...queryParams,},
    ...(options || {}),
  });
}

/** 删除文件 POST /api/Admin/delFile */
export async function delFile(body: {
    fileIdAndUserIds?: string,
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
  
  return request<any>('/api/Admin/delFile', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 下载文件 GET /api/Admin/download/${param0} */
export async function download(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadParams
    ,
  options ?: {[key: string]: any}
) {
  const { 'code': param0, 
  ...queryParams
  } = params;
  return request<any>(`/api/Admin/download/${param0}`, {
  method: 'GET',
    params: {...queryParams,},
    ...(options || {}),
  });
}

/** 预览文件 GET /api/Admin/getFile/${param0}/${param1} */
export async function getFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFileParams
    ,
  options ?: {[key: string]: any}
) {
  const { 'userId': param0, 'fileId': param1, 
  ...queryParams
  } = params;
  return request<any>(`/api/Admin/getFile/${param0}/${param1}`, {
  method: 'GET',
    params: {...queryParams,},
    ...(options || {}),
  });
}

/** 获取文件夹信息 POST /api/Admin/getFolderInfo */
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
  
  return request<any>('/api/Admin/getFolderInfo', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取系统设置 GET /api/Admin/getSysSettings */
export async function getSysSettings(
  options ?: {[key: string]: any}
) {
  return request<any>('/api/Admin/getSysSettings', {
  method: 'GET',
    ...(options || {}),
  });
}

/** 预览视频 GET /api/Admin/getVideoInfo/${param0}/${param1} */
export async function getVideoInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVideoInfoParams
    ,
  options ?: {[key: string]: any}
) {
  const { 'userId': param0, 'fileId': param1, 
  ...queryParams
  } = params;
  return request<any>(`/api/Admin/getVideoInfo/${param0}/${param1}`, {
  method: 'GET',
    params: {...queryParams,},
    ...(options || {}),
  });
}

/** 分页查询文件列表 POST /api/Admin/loadFileList */
export async function loadFileList(body: {
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
  
  return request<any>('/api/Admin/loadFileList', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 分页查询用户列表 POST /api/Admin/loadUserList */
export async function loadUserList(body: {
    UserId?: string,
    UserIdFuzzy?: string,
    NickName?: string,
    NickNameFuzzy?: string,
    Email?: string,
    EmailFuzzy?: string,
    QqAvatar?: string,
    QqAvatarFuzzy?: string,
    QqOpenId?: string,
    QqOpenIdFuzzy?: string,
    Password?: string,
    PasswordFuzzy?: string,
    JoinTime?: string,
    JoinTimeStart?: string,
    JoinTimeEnd?: string,
    LastLoginTime?: string,
    LastLoginTimeStart?: string,
    LastLoginTimeEnd?: string,
    Status?: number,
    UseSpace?: number,
    TotalSpace?: number,
    SimplePage.PageNo?: number,
    SimplePage.CountTotal?: number,
    SimplePage.PageSize?: number,
    SimplePage.PageTotal?: number,
    SimplePage.Start?: number,
    SimplePage.End?: number,
    PageNo?: number,
    PageSize?: number,
    OrderBy?: string,
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
  
  return request<any>('/api/Admin/loadUserList', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 保存系统设置 POST /api/Admin/saveSysSettings */
export async function saveSysSettings(body: {
    registerEmailTitle?: string,
    registerEmailContent?: string,
    userInitUseSpace?: number,
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
  
  return request<any>('/api/Admin/saveSysSettings', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 修改用户空间 POST /api/Admin/updateUserSpace */
export async function updateUserSpace(body: {
    userId?: string,
    changeSpace?: number,
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
  
  return request<any>('/api/Admin/updateUserSpace', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 修改用户账户状态 POST /api/Admin/updateUserStatus */
export async function updateUserStatus(body: {
    userId?: string,
    status?: number,
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
  
  return request<any>('/api/Admin/updateUserStatus', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

