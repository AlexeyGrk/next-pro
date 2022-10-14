import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { MenuItem } from '../../interfaces/menu.interface';

export interface MainPopularInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  menu:MenuItem[];
  firstCategory:number;
}