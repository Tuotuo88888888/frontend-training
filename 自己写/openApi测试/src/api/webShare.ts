// @ts-ignore
/* eslint-disable */
import request from './request.js';

/** 校验分享码 POST /api/WebShare/checkShareCode */
export async function checkShareCode(
  body: {
    shareId?: string;
    code?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

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

  return request<any>('/api/WebShare/checkShareCode', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 创建下载链接 POST /api/WebShare/createDownloadUrl/${param0}/${param1} */
export async function createDownloadUrl(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createDownloadUrlParams,
  options?: { [key: string]: any },
) {
  const { shareId: param0, fileId: param1, ...queryParams } = params;
  return request<any>(`/api/WebShare/createDownloadUrl/${param0}/${param1}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 下载文件 GET /api/WebShare/download/${param0} */
export async function download(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadParams,
  options?: { [key: string]: any },
) {
  const { code: param0, ...queryParams } = params;
  return request<any>(`/api/WebShare/download/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 预览文件 GET /api/WebShare/getFile/${param0}/${param1} */
export async function getFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFileParams,
  options?: { [key: string]: any },
) {
  const { shareId: param0, fileId: param1, ...queryParams } = params;
  return request<any>(`/api/WebShare/getFile/${param0}/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取目录信息 POST /api/WebShare/getFolderInfo */
export async function getFolderInfo(
  body: {
    shareId?: string;
    path?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

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

  return request<any>('/api/WebShare/getFolderInfo', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取分享信息 POST /api/WebShare/getShareInfo */
export async function getShareInfo(
  body: {
    shareId?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

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

  return request<any>('/api/WebShare/getShareInfo', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取分享登录信息 POST /api/WebShare/getShareLoginInfo */
export async function getShareLoginInfo(
  body: {
    shareId?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

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

  return request<any>('/api/WebShare/getShareLoginInfo', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 分页查询分享列表 POST /api/WebShare/loadFileList */
export async function loadFileList(
  body: {
    shareId?: string;
    filePid?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

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

  return request<any>('/api/WebShare/loadFileList', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 保存分享文件到自己网盘 POST /api/WebShare/saveShare */
export async function saveShare(
  body: {
    shareId?: string;
    shareFileIds?: string;
    myFolderId?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

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

  return request<any>('/api/WebShare/saveShare', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 预览视频 GET /api/WebShare/ts/getVideoInfo/${param0}/${param1} */
export async function getVideoInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVideoInfoParams,
  options?: { [key: string]: any },
) {
  const { shareId: param0, fileId: param1, ...queryParams } = params;
  return request<any>(`/api/WebShare/ts/getVideoInfo/${param0}/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
