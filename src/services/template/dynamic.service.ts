import request from '@/services/plugins/request';

// Types
import { RequestInterface } from '../../models';

export class CustomService {
  static customServiceMethod(
    params: RequestInterface,
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
