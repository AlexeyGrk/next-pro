import styles from './MainPopularInfo.module.css';
import { MainPopularInfoProps } from './MainPopularInfo.props';
import { CoursesInfo } from '../CoursesInfo/CoursesInfo';



export const MainPopularInfo = ({menu,firstCategory}:MainPopularInfoProps):JSX.Element =>{
 // console.log('menu',menu);

 return (
  <div className={styles.wrapper}>
    {firstCategory===0 &&  <CoursesInfo menu={menu}/>}


  </div>
 );
};