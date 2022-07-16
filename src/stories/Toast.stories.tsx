import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { ToastParams } from '@/types';
import { useToastService } from '@/utils/hooks';
import ToastProvider from '@/components/ToastProvider';
import dataCy from '@/constants/dataCy';
import { ExempleComponent } from './ExempleComponent';

export const Template = (args: ToastParams) => {
  const notify = useToastService();

  const handleError = () => notify.error('Error example');
  const handleWarning = () => notify.warning('Warnind example');
  const handleSuccess = () => notify.success('Success example');
  const handleInfo = () => notify.info('Info example');
  const handleCustom = () => notify.info('Custom example', {
    color: '#14b1ab',
    description: 'Some description',
  });

  return (
    <ExempleComponent>
      <button data-cy={dataCy.showErr} type="button" onClick={handleError}>
        Test error
      </button>
      <button data-cy={dataCy.showWarn} type="button" onClick={handleWarning}>
        Test warning
      </button>
      <button data-cy={dataCy.showSucc} type="button" onClick={handleSuccess}>
        Test success
      </button>
      <button data-cy={dataCy.showInf} type="button" onClick={handleInfo}>
        Test info
      </button>
      <button data-cy={dataCy.showCust} type="button" onClick={handleCustom}>
        Custom
      </button>
      <ToastProvider {...args} />
    </ExempleComponent>
  );
};

export default {
  title: 'Toast',
  component: ToastProvider,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    position: {
      control: {
        type: 'inline-radio',
        options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      },
    },
    deleteTime: {
      control: {
        type: 'number',
      },
    },
    margins: {
      control: {
        type: 'number',
      },
    },
    animation: {
      control: {
        type: 'inline-radio',
        options: ['horizontal', 'vertical'],
      },
    },
  },
} as ComponentMeta<typeof ToastProvider>;
