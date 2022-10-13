import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import {Menu} from '../Menu/Menu';
import Logo from '../Logo/logo.svg';
import {Search} from '../../components';
import Link from 'next/link';
import { useRouter } from 'next/router';




export const Sidebar = ({className,...props}:SidebarProps):JSX.Element =>{
  const router = useRouter();
 return (
   <div {...props} onClick={()=>router.push('/')} className={cn(className,styles.sidebar)}>
       <Logo   className={styles.logo}/>
     <Search/>
     <Menu />
   </div>
 );
};