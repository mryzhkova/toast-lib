import { ToastVariant, ToastOptions } from '@/types';
import { newToastService } from '@/components/ToastProvider';
import { VARIANTS } from '@/constants';
import { mergeOptions } from '@/utils/helpers';

const createToastByType = (variant: ToastVariant) => (title: string, options?: ToastOptions) => {
    newToastService.generateToast(mergeOptions(variant, title, options));
  };

export const useToastService = () => {
  const info = createToastByType(VARIANTS.info);
  const success = createToastByType(VARIANTS.success);
  const warning = createToastByType(VARIANTS.warn);
  const error = createToastByType(VARIANTS.error);

  return { info, success, error, warning };
};
