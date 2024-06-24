// @ts-ignore
/* eslint-disable */
import request from './request.js';

/** 验证码 GET /api/Account/checkCode */
export async function checkCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkCodeParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/Account/checkCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取头像 GET /api/Account/getAvatar/${param0} */
export async function getAvatar(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAvatarParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<any>(`/api/Account/getAvatar/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取用户信息 GET /api/Account/getUserInfo */
export async function getUserInfo(options?: { [key: string]: any }) {
  return request<any>('/api/Account/getUserInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户空间 GET /api/Account/getUseSpace */
export async function getUseSpace(options?: { [key: string]: any }) {
  return request<any>('/api/Account/getUseSpace', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /api/Account/login */
export async function login(
  body: {
    email?: string;
    password?: string;
    checkCode?: string;
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

  return request<any>('/api/Account/login', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 退出登录 DELETE /api/Account/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<any>('/api/Account/logout', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** qq登录 POST /api/Account/qqlogin */
export async function qqlogin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.qqloginParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/Account/qqlogin', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 注册 POST /api/Account/register */
export async function register(
  body: {
    email?: string;
    nickName?: string;
    password?: string;
    checkCode?: string;
    emailCode?: string;
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

  return request<any>('/api/Account/register', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 重置密码 POST /api/Account/resetPwd */
export async function resetPwd(
  body: {
    email?: string;
    password?: string;
    checkCode?: string;
    emailCode?: string;
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

  return request<any>('/api/Account/resetPwd', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 发送邮箱验证码 POST /api/Account/sendEmailCode */
export async function sendEmailCode(
  body: {
    email?: string;
    checkCode?: string;
    type?: number;
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

  return request<any>('/api/Account/sendEmailCode', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 修改密码 POST /api/Account/updatePassword */
export async function updatePassword(
  body: {
    password?: string;
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

  return request<any>('/api/Account/updatePassword', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 更新头像 POST /api/Account/updateUserAvatar */
export async function updateUserAvatar(
  body: {
    ContentType?: string;
    ContentDisposition?: string;
    Headers?: Record<string, any>;
    Length?: number;
    Name?: string;
    FileName?: string;
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

  return request<any>('/api/Account/updateUserAvatar', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** qq登录回调 POST /qqlogincalback */
export async function qqLoginCallback(
  body: {
    code?: string;
    state?: string;
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

  return request<any>('/qqlogincalback', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}
