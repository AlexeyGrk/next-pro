import { CoursesInfoProps } from './CoursesInfo.props';
import styles from './CoursesInfo.module.css';
import Triangle from '../../heplers/icons/triangle.svg';
import Dots from '../../heplers/icons/dots.svg';
import { Card } from '../Card/Card';

export const CoursesInfo = ({menu}:CoursesInfoProps):JSX.Element =>{
  return (
    <div className={styles.wrapper}>
      <a href={'https://pathfinder.jobs/'} target={'_blank'}>
        <div className={styles.decor}>
          <Triangle className={styles.triangle}/>
          <span className={styles.text}>Не уверены в специальности?</span>
          <span className={styles.link}>Пройдите тест</span>
          <Dots className={styles.dots}/>
        </div>
      </a>

      <ul className={styles.cardList}>
        {menu && menu.map(i=>(<Card className={styles.card} color={'blue'} key={i._id.secondCategory}>{i._id.secondCategory}</Card>))}
      </ul>
    </div>
  );
};