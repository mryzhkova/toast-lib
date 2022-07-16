import { VARIANTS, POSITIONS, ANIMATIONS } from '@/constants';

export interface RefTypes {
  onAddToast: (toast: ToastItem) => void,
  onRemoveToast: (toastId: string) => void,
}

export type ToastVariant = VARIANTS;

export type Position = POSITIONS;

export type Animation = ANIMATIONS;

export interface ToastParams {
  position?: Position;
  deleteTime?: number;
  margins?: number;
  animation?: Animation;
  variant?: ToastVariant
  title?: string;
  color?: string;
  description?: string;
}

export interface ToastOptions {
  color?: string;
  description?: string;
}

export interface CToastOptions {
  variant: ToastVariant
  title: string;
  color: string;
  description: string;
  icon: string;
}

export interface ToastItem {
  id: string;
  variant: ToastVariant
  title: string;
  color: string;
  description: string;
  icon: string;
  position?: Position;
  deleteTime?: number;
  margins?: number;
  animation?: Animation;
  removeToast: (id: string) => void;
}
