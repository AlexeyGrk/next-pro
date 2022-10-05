import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import up from './arrow-up2.svg';
import close from './primary-x-icon.svg';
import burger from './burger.svg';

export const icons = {
  up,
  close,
  burger,
  };

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  appearance : 'primary' | 'white';
  icon:IconName;
}