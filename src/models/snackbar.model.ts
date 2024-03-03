interface ControlSnackbarInterface {
  model: boolean;
  duration?: number;
  closeSnackbar?: () => void;
  severity?: 'error' | 'info' | 'success' | 'warning';
  message: string;
}

interface SnackbarInterface {
  control: ControlSnackbarInterface;
}

interface SnackbarInterfaceProps {
  snackbar: SnackbarInterface;
}

export type {
  ControlSnackbarInterface,
  SnackbarInterfaceProps,
  SnackbarInterface,
};
