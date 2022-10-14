import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { MenuItem } from '../../interfaces/menu.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface MainPopularInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  menu:MenuItem[];
  firstCategory:number;
  products:ProductModel[];
}