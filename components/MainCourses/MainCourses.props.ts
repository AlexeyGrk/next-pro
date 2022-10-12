import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { MenuItem } from '../../interfaces/menu.interface';

export interface MainCoursesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  menu:MenuItem[],
}