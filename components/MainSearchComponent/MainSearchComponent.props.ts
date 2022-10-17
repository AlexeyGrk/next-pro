import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { MenuItem } from '../../interfaces/menu.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface MainSearchComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  products:ProductModel[];
}