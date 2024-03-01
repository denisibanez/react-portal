/* eslint-disable @typescript-eslint/no-explicit-any */
import { setLoader } from '@/store/reducers/loader/loader.store';
import { setSnackbar } from '@/store/reducers/snackbar/snackbar.store';
import store from '@/store/index';

// SERVICE
import { CustomService } from '@/services/index';

export interface RequestParams {
  type: string;
  url: string;
  payload?: any;
  loading?: boolean | null | undefined;
  customSuccessMessage?: string | any;
  customErrorMessage?: string | any;
  headers?: any;
}

export default async function dynamicService(params: RequestParams) {
  if (params.loading) {
    // LOADING_DISPATCH
    store.dispatch(setLoader(true));
  }

  const response = await CustomService.customServiceMethod(
    params,
    (response: any) => {
      if (params.customSuccessMessage) {
        const { model, duration, message, severity } =
          params.customSuccessMessage;
        // SNACKBAR_DISPATCH
        const control: any = {
          model,
          duration,
          message,
          severity,
        };
        store.dispatch(setSnackbar(control));
      }
      //LOADING_DISPATCH
      store.dispatch(setLoader(false));
      return response;
    },
    (e: any) => {
      console.log(e, 'ERROR');
      // SNACKBAR_DISPATCH
      const control: any = {
        model: true,
        duration: 6000,
        message: e.message || params.customErrorMessage || 'Error!',
        severity: 'error',
      };
      store.dispatch(setSnackbar(control));
      //SNACKBAR_DISPATCH
    },
    () => {
      console.log('DONE');
      //LOADING_DISPATCH
      store.dispatch(setLoader(false));
    }
  );
  return response;
}
