import {DividerProps} from './DividerProps';
import cn from 'classnames';
import styles from './Devider.module.css';

export const Devider = ({className, ...props}:DividerProps):JSX.Element =>{
 return (
  <hr className={cn(className,styles.hr)} {...props}/>
 );
};