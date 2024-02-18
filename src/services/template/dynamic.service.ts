/* eslint-disable @typescript-eslint/no-explicit-any */
import request from '@/services/plugins/request';

export interface RequestParams {
  type: string;
  url: string;
  payload?: any;
  loading?: boolean | null | undefined;
  customSuccessMessage?: string | null;
  customErrorMessage?: string | null;
  headers?: any;
}

export class CustomService {
  static customServiceMethod(
    params: RequestParams,
    success?: (response: any) => void,
    error?: (e: any) => void,
    done?: (() => void) | undefined
  ) {
    const req: any = {
      method: params.type,
      url: `${process.env.VITE__BASE_URL}${params.url}`,
    };
    if (params.payload) {
      req.body = params.payload;
    }

    if (params.headers) {
      req.headers = params.headers;
    }
    return request(req, success, error, done);
  }
}
