// @ts-ignore
/* eslint-disable */
import request from './request.js';

/** 此处后端没有提供注释 GET /api/Test/Index */
export async function index(options?: { [key: string]: any }) {
  return request<any>('/api/Test/Index', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Test/Test11 */
export async function test11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.test11Params,
  options?: { [key: string]: any },
) {
  return request<any>('/api/Test/Test11', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
