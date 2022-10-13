import styles from './MainCourses.module.css';
import { MainCoursesProps } from './MainCourses.props';
import { Htag } from '../Htag/Htag';



export const MainCourses = ({menu}:MainCoursesProps):JSX.Element =>{
 console.log('menu',menu);

 return (
  <div className={styles.wrapper}>
    <div className={styles.decorLine}>
      <span>Не уверены в специальности?</span>
      <span>Пройдите тест</span>

    </div>
   <ul>
    {menu && menu.slice(0,4).map(i=>(<div key={i._id.secondCategory}>{i._id.secondCategory}</div>))}
   </ul>

  </div>
 );
};