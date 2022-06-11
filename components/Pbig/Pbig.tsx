import {PbigProps} from './Pbig.props';
import cn from 'classnames';
import styles from './Pbig.module.css';

export const Pbig = ({size='m',children,className, ...props}:PbigProps):JSX.Element =>{
 return (
   <p className={cn(styles.p,className, {
    [styles.sizeS] : size==='s',
    [styles.sizeM] : size==='m',
    [styles.sizeL] : size==='l',
   })} {...props}>{children}</p>
 );
};