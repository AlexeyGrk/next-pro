import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import {Menu} from '../Menu/Menu';
import Logo from '../Logo/logo.svg';
import {Search} from '../../components';
import { useRouter } from 'next/router';



//dsa
export const Sidebar = ({className,...props}:SidebarProps):JSX.Element =>{
  const router = useRouter();
 return (
   <div {...props} className={cn(className,styles.sidebar)}>
       <Logo onClick={()=>router.push('/')}   className={styles.logo}/>
     <Search/>
     <Menu />
   </div>
 );
};