import {SearchProps} from './Search.props';
import cn from 'classnames';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import SearchIcon from './searchIcon.svg';
import { useRouter } from 'next/router';

export const Search = ({className, ...props}:SearchProps):JSX.Element =>{
  const router = useRouter();
  const [search,setSearch] = useState('');
  const goToSearch = () => {
    router.push({pathname:'/search',query:{q:search}});
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      goToSearch();
    }
  };

  return (
   <div className={cn(className,styles.search)} {...props}>
     <Input placeholder={'Поиск'} className={styles.input} value={search} onKeyDown={handleKeyDown} onChange={(e)=>setSearch(e.target.value)}/>
     <Button appearance={'primary'} className={styles.button} onClick={goToSearch}><SearchIcon/></Button>

   </div>
 );
};