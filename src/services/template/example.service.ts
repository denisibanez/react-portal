/* eslint-disable @typescript-eslint/no-explicit-any */
import request from '@/services/plugins/request';

export class ExampleService {
  static getExample(
    success: (response: any) => void,
    error: (e: any) => void,
    done: (() => void) | undefined
  ) {
    const req: any = {
      method: 'get',
      url: `${process.env.VITE__BASE_PATH_EXAMPLE}/`,
    };
    return request(req, success, error, done);
  }
}
