import styles from './MainPopularInfo.module.css';
import { MainPopularInfoProps } from './MainPopularInfo.props';
import { CoursesInfo } from '../CoursesInfo/CoursesInfo';



export const MainPopularInfo = ({menu,firstCategory,products}:MainPopularInfoProps):JSX.Element =>{

 return (
  <div className={styles.wrapper}>
    {firstCategory===0 &&  <CoursesInfo products={products} menu={menu}/>}
   {firstCategory===1 && <CoursesInfo products={products} firstCategory={firstCategory} menu={menu}/>}


  </div>
 );
};