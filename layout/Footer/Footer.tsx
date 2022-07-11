import cn from 'classnames';
import styles from './Footer.module.css';
import {format} from 'date-fns';
import { FooterProps } from './Footer.props';


export const Footer = ({className,...props}:FooterProps):JSX.Element =>{
 return (
   <footer className={cn(className,styles.footer)} {...props}>
    <div>OwlTop 2021 - {format(new Date(),'yyyy')} All rights</div>

     <a href={'#'} target={'_blank'}>
       Terms of use
     </a>
     <a href={'#'} target={'_blank'}>
       Privacy policy
     </a>
   </footer>
 );
};