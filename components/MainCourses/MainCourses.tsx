import styles from './MainCourses.module.css';
import { MainCoursesProps } from './MainCourses.props';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app.context';


export const MainCourses = ({menu}:MainCoursesProps):JSX.Element =>{
 console.log('menu',menu);

 return (
  <div className={styles.wrapper}>

  </div>
 );
};