import React, { FC, useEffect, useState } from 'react';
import { ToastItem } from '@/types';
import { POSITIONS, ANIMATIONS, defaultParams } from '@/constants';
import dataCy from '@/constants/dataCy';
import StyledToast from '../components';

interface Props {
  toastParams: ToastItem;
}

const Toast: FC<Props> = ({ toastParams }): JSX.Element => {
  const {
    id,
    variant,
    title,
    description,
    color,
    icon,
    position = POSITIONS.topRight,
    animation = ANIMATIONS.horizontal,
    deleteTime = defaultParams.deleteTime,
    removeToast,
  } = toastParams;

  const [backAnimate, setBackAnimate] = useState('');
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);

  const handleDragStart = e => {
    setDragStart(e.clientX);
  };

  const handleDragMove = e => {
    setDragEnd(e.clientX);
  };

  const handleDragEnd = () => {
    if (dragStart - dragEnd < -150) {
      removeToast(id);
    }
  };

  const handleRemoveToast = () => {
    setBackAnimate('backanimate');
    setTimeout(() => {
      removeToast(id);
    }, 600);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBackAnimate('backanimate');
    }, deleteTime - 600);
    return () => clearTimeout(timeoutId);
  }, [deleteTime]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      removeToast(id);
    }, deleteTime);
    return () => clearTimeout(timeoutId);
  }, [deleteTime, id, removeToast]);

  return (
    <StyledToast
      color={color}
      variant={variant}
      position={position}
      animation={animation}
    >
      <div
        data-cy={variant}
        className={`toast ${backAnimate}`}
        draggable
        onDragEnd={handleDragEnd}
        onDrag={handleDragMove}
        onDragStart={handleDragStart}
      >
        <div className="image">
          <img src={icon} alt="icon" />
        </div>
        <div className="text">
          <div data-cy={dataCy.toastTitle} className="title">{title}</div>
          <div data-cy={dataCy.toastDesc} className="desc">{description}</div>
        </div>
        <button
          data-cy={dataCy.closeBtn}
          type="button"
          aria-label="close"
          className="close"
          onClick={handleRemoveToast}
        />
      </div>
    </StyledToast>
  );
};

export default Toast;
