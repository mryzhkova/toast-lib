import { COLORS, VARIANTS } from '@/constants';
import { CToastOptions, ToastItem, ToastOptions, ToastParams, ToastVariant } from '@/types';
import errorIcon from '@assets/error.png';
import warningIcon from '@assets/warning.png';
import successIcon from '@assets/success.png';
import infoIcon from '@assets/info.png';

export const generateToastParams = (toastParams: ToastParams, toast: ToastItem) => ({
  ...toastParams,
  ...toast,
  description: toast.description || toastParams.description,
  title:
    toast.title in VARIANTS || toastParams.title
      ? toastParams.title
      : toast.title,
  color:
    toast.color in COLORS || toastParams.color
      ? toastParams.color
      : toast.color,
});

export const mergeOptions = (
  variant: ToastVariant,
  title: string,
  options: ToastOptions = {},
): CToastOptions => {
  const { color = '', description = '' } = options;
  const toastOtions = {
    description,
    variant,
  };
  switch (variant) {
    case VARIANTS.info:
      return {
        ...toastOtions,
        title: title || VARIANTS.info,
        color: color || COLORS.info,
        icon: infoIcon,
      };
    case VARIANTS.success:
      return {
        ...toastOtions,
        title: title || VARIANTS.success,
        color: color || COLORS.success,
        icon: successIcon,
      };
    case VARIANTS.warn:
      return {
        ...toastOtions,
        title: title || VARIANTS.warn,
        color: color || COLORS.warn,
        icon: warningIcon,
      };
    case VARIANTS.error:
      return {
        ...toastOtions,
        title: title || VARIANTS.error,
        color: color || COLORS.error,
        icon: errorIcon,
      };
    default:
      return {
        ...toastOtions,
        title: title || VARIANTS.info,
        color: color || COLORS.info,
        icon: infoIcon,
      };
  }
};
