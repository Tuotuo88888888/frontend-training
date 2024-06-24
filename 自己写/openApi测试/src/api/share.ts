// @ts-ignore
/* eslint-disable */
import request from './request.js'

/** 取消分享 POST /api/Share/cancelShare */
export async function cancelShare(body: {
    shareIds?: string,
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
  
  return request<any>('/api/Share/cancelShare', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 分页查询分享列表 POST /api/Share/loadShareList */
export async function loadShareList(body: {
    ShareId?: string,
    ShareIdFuzzy?: string,
    FileId?: string,
    FileIdFuzzy?: string,
    UserId?: string,
    UserIdFuzzy?: string,
    ValidType?: number,
    ExpireTime?: string,
    ExpireTimeStart?: string,
    ExpireTimeEnd?: string,
    ShareTime?: string,
    ShareTimeStart?: string,
    ShareTimeEnd?: string,
    Code?: string,
    CodeFuzzy?: string,
    ShowCount?: number,
    QueryFileName?: boolean,
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
  
  return request<any>('/api/Share/loadShareList', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 分享文件 POST /api/Share/shareFile */
export async function shareFile(body: {
    fileId?: string,
    validType?: number,
    code?: string,
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
  
  return request<any>('/api/Share/shareFile', {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

