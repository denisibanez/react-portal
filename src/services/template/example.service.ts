import request from '@/services/plugins/request';

export class ExampleService {
  static getExample(
    success: (response: any) => void,
    error: (e: any) => void,
    done: (() => void) | undefined
  ) {
    const req: any = {
      method: 'get',
      url: `${process.env.VITE__BASE_PATH_EXAMPLE}/v2/pokemon`,
    };
    return request(req, success, error, done);
  }
}
