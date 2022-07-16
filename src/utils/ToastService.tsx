import { v4 as uuidv4 } from 'uuid';
import { ToastItem, RefTypes, CToastOptions } from '@/types';

class ToastService {
  static toasts: Array<ToastItem> = [];

  static queue: Array<ToastItem> = [];

  toastRef:RefTypes = {
    onAddToast: () => {},
    onRemoveToast: () => {},
  };

  init = (ref: RefTypes): void => {
    this.toastRef = ref;
  };

  getAllToasts = (): Array<ToastItem> => ToastService.toasts;

  addToast = (toast: ToastItem) => {
    ToastService.toasts.push(toast);
    this.toastRef.onAddToast(toast);
  };

  removeToast = (toastId: string): void => {
    ToastService.toasts = ToastService.toasts.filter(toast => toast.id !== toastId);
    this.toastRef.onRemoveToast(toastId);
    if (ToastService.queue.length) {
      this.addToast(ToastService.queue.shift());
    }
  };

  distributeToast = (toast: ToastItem): void => {
    if (ToastService.toasts.length > 2) {
      ToastService.queue.push(toast);
    } else {
      this.addToast(toast);
    }
  };

  generateToast = (toastOptions: CToastOptions): void => {
    const newToast: ToastItem = {
      id: uuidv4(),
      ...toastOptions,
      removeToast: id => this.removeToast(id),
    };
    this.distributeToast(newToast);
  };
}

export default ToastService;
