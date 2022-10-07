import { SortEnum, SortProps } from './Sort.props';
import {KeyboardEvent} from 'react';
import cn from 'classnames';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';

export const Sort = ({sort,setSort,className,...props}:SortProps):JSX.Element =>{

 return (
   <div className={cn(styles.sort,className)}  {...props}>
     <span onClick={()=>setSort(SortEnum.Rating)} tabIndex={0} aria-label={'Кнопка сортировки по рейтингу'}  onKeyDown={(key:KeyboardEvent)=>{
       if(key.code==='Enter' || key.code==='Space'){
         key.preventDefault();
         setSort(SortEnum.Rating);
       }
     }} className={cn({
       [styles.active] : sort === SortEnum.Rating
     })}>
       <SortIcon className={styles.sortIcon}/>
       По рейтингу
     </span>
     <span  aria-label={'Кнопка сортировки по цене'} onClick={()=>setSort(SortEnum.Price)} onKeyDown={(key:KeyboardEvent)=>{
       if(key.code==='Enter' || key.code==='Space'){
         key.preventDefault();
         setSort(SortEnum.Price);
       }
     }}  tabIndex={0} className={cn({
       [styles.active] : sort === SortEnum.Price
     })}>
      <SortIcon className={styles.sortIcon}/>
       По цене
     </span>

   </div>
 );
};