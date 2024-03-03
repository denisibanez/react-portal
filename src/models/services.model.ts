import { ControlSnackbarInterface } from './index';

interface UrlParamsInterface {
  path: string;
  params?: any;
}

interface RequestInterface {
  type: 'get' | 'put' | 'post' | 'delete' | 'path';
  url: string;
  payload?: any;
  headers?: any;
  loading?: boolean;
  customSuccessMessage?: ControlSnackbarInterface | undefined;
  customErrorMessage?: string;
}

export type { UrlParamsInterface, RequestInterface };
