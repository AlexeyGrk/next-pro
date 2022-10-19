import { DetailedHTMLProps, HTMLAttributes} from 'react';
import { ProductModel } from '../../interfaces/product.interface';

export interface MainSearchComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  products:ProductModel[];
}