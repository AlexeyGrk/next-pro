import styles from './MainCourses.module.css';
import { MainCoursesProps } from './MainCourses.props';



export const MainCourses = ({menu}:MainCoursesProps):JSX.Element =>{
 // console.log('menu',menu);

 return (
  <div className={styles.wrapper}>
   <ul>
    {menu && menu.map(i=>(<div>{i._id.secondCategory}</div>))}
   </ul>

  </div>
 );
};