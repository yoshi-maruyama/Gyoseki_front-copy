import { Bounce, ToastOptions, toast } from "react-toastify";

export class AppToast {
  private _settings: ToastOptions;

  constructor(options?: ToastOptions) {
    const defaultSettings = {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    };
    this._settings = Object.assign({}, defaultSettings, options);
  }

  error(message: string) {
    toast.error(message, { ...this._settings });
  }
}

export default function useToast(options?: ToastOptions) {
  return new AppToast(options);
}
