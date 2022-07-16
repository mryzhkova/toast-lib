import React, { useLayoutEffect, useRef } from 'react';
import { RefTypes, ToastParams } from '@/types';
import ToastContainer from '@/components/ToastContainer';
import ToastService from '@/utils/ToastService';

export const newToastService = new ToastService();

const ToastProvider = (args: ToastParams): JSX.Element => {
  const toastRef = useRef<RefTypes>(null);

  useLayoutEffect(() => {
    newToastService.init(toastRef.current);
  }, []);

  return <ToastContainer ref={toastRef} toastParams={args} />;
};

export default ToastProvider;
