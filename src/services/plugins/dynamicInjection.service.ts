/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RequestParams {
  type: string;
  url: string;
  payload?: any;
  loading?: boolean | null | undefined;
  customSuccessMessage?: string | null;
  customErrorMessage?: string | null;
  headers?: any;
}

// SERVICE
import { CustomService } from '@/services/index';

export default async function dynamicService(params: RequestParams) {
  if (params.loading) {
    // LOADING_DISPATCH
  }

  const response = await CustomService.customServiceMethod(
    params,
    (response: any) => {
      if (params.customSuccessMessage) {
        // SNACKBAR_DISPATCH
      }
      //LOADING_DISPATCH
      return response;
    },
    (e: any) => {
      console.log(e, 'ERROR');
      //SNACKBAR_DISPATCH
    },
    () => {
      console.log('DONE');
      //LOADING_DISPATCH
    }
  );
  return response;
}
