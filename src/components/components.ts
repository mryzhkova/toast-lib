import { VARIANTS, POSITIONS, ANIMATIONS, COLORS } from '@/constants';
import styled, { css, keyframes } from 'styled-components';

interface ToastProps {
  variant: VARIANTS;
  position: POSITIONS;
  color: string;
  animation: ANIMATIONS;
}

interface WrapToastpProps {
  position: POSITIONS;
  animation: ANIMATIONS;
  margins: number;
}

const fromTop = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const fromBottom = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const FromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fromTopBack = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-150%);
  }
`;

const fromBottomBack = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(150%);
  }
`;

const FromLeftBack = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-150%);
  }
`;

const fromRightBack = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(150%);
  }
`;

export const ToastsWpap = styled.div<WrapToastpProps>`
  position: fixed;
  margin: ${({ margins }) => `${margins}px`};
  ${({ position }) => position === POSITIONS.topRight && css`
      top: 15px;
      right: 15px;
    `}
  ${({ position }) => position === POSITIONS.topLeft && css`
      top: 15px;
      left: 15px;
    `}
  ${({ position }) => position === POSITIONS.bottomRight && css`
      bottom: 15px;
      right: 15px;
    `}
  ${({ position }) => position === POSITIONS.bottomLeft && css`
      bottom: 15px;
      left: 15px;
    `}
`;

const StyledToast = styled.div<ToastProps>`
  .toast {
    width: 320px;
    min-height: 60px;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    color: ${({ variant }) => variant === VARIANTS.warn ? COLORS.dark : COLORS.white};
    background-color: ${({ color }) => color};
    font-family: 'Roboto';
    position: relative;
    display: flex;
    align-items: center;
    ${({ position, animation }) => position === POSITIONS.topRight && css`
        animation: ${animation === ANIMATIONS.horizontal ? fromRight : fromTop}
          0.7s;
      `}
    ${({ position, animation }) => position === POSITIONS.topLeft && css`
        animation: ${animation === ANIMATIONS.horizontal ? FromLeft : fromTop}
          0.7s;
      `}
    ${({ position, animation }) => position === POSITIONS.bottomRight && css`
        animation: ${animation === ANIMATIONS.horizontal
            ? fromRight
            : fromBottom}
          0.7s;
      `}
    ${({ position, animation }) => position === POSITIONS.bottomLeft && css`
        animation: ${animation === ANIMATIONS.horizontal
            ? FromLeft
            : fromBottom}
          0.7s;
      `}
  }
  .toast.backanimate {
    ${({ position, animation }) => position === POSITIONS.topRight && css`
        animation: ${animation === ANIMATIONS.horizontal ? fromRightBack : fromTopBack}
          0.7s;
      `}
    ${({ position, animation }) => position === POSITIONS.topLeft && css`
        animation: ${animation === ANIMATIONS.horizontal ? FromLeftBack : fromTopBack}
          0.7s;
      `}
    ${({ position, animation }) => position === POSITIONS.bottomRight && css`
        animation: ${animation === ANIMATIONS.horizontal
            ? fromRightBack
            : fromBottomBack}
          0.7s;
      `}
    ${({ position, animation }) => position === POSITIONS.bottomLeft && css`
        animation: ${animation === ANIMATIONS.horizontal
            ? FromLeftBack
            : fromBottomBack}
          0.7s;
      `}
  }
  .toast .desc {
    font-size: 14px;
    font-weight: 300;
  }
  .toast .title {
    font-size: 18px;
    margin-bottom: 4px;
  }
  .image img {
    width: 40px;
    margin-right: 20px;
  }
  .close {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 35px;
  }
  .close::before,
  .close::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: ${({ variant }) => variant === VARIANTS.warn ? COLORS.dark : COLORS.white};
  }
  .close::before {
    transform: rotate(45deg);
  }
  .close::after {
    transform: rotate(-45deg);
  }
`;

export default StyledToast;
