import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
  RefObject,
} from 'react';
import ErrorBoundary from '@/ErrorBoundary';
import Portal from '@/Portal';
import { generateToastParams } from '@/utils/helpers';
import { ToastParams, RefTypes, ToastItem } from '@/types';
import { POSITIONS, ANIMATIONS } from '@/constants';
import dataCy from '@/constants/dataCy';
import Toast from '../Toast';
import { ToastsWpap } from '../components';

interface Props {
  toastParams: ToastParams;
}

const ToastContainer = ({ toastParams }: Props, ref: RefObject<RefTypes>) => {
  const [toastItems, setToastItems] = useState<ToastItem[]>([]);

  const handleAdd = useCallback((toast: ToastItem): void => {
    setToastItems(prevItems => [...prevItems, toast]);
  }, []);

  const handleRemove = useCallback((toastId: string): void => {
    setToastItems(prevItems => prevItems.filter(toast => toast.id !== toastId));
  }, []);

  const onDragHandler = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  useImperativeHandle(ref, () => ({
    onAddToast: handleAdd,
    onRemoveToast: handleRemove,
  }));

  const {
    position = POSITIONS.topRight,
    animation = ANIMATIONS.horizontal,
    margins = 0,
  } = toastParams;

  return (
    <Portal>
      <ErrorBoundary>
        <ToastsWpap
          data-cy={dataCy.toastWrap}
          onDragOver={onDragHandler}
          position={position}
          animation={animation}
          margins={margins}
        >
          {toastItems.map(toast => (
            <Toast key={toast.id} toastParams={generateToastParams(toastParams, toast)} />
          ))}
        </ToastsWpap>
      </ErrorBoundary>
    </Portal>
  );
};

export default forwardRef(ToastContainer);
