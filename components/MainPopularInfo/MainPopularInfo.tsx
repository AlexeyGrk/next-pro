import styles from './MainPopularInfo.module.css';
import { MainPopularInfoProps } from './MainPopularInfo.props';
import { CoursesInfo } from '../CoursesInfo/CoursesInfo';
import { ComingSoon } from '../ComingSoon/ComingSoon';


export const MainPopularInfo = ({menu, firstCategory, products}: MainPopularInfoProps): JSX.Element => {

  return (
    <div className={styles.wrapper}>
      {firstCategory === 0 && <CoursesInfo products={products} menu={menu}/>}
      {firstCategory === 1 && <CoursesInfo products={products} firstCategory={firstCategory} menu={menu}/>}
      {firstCategory === 2 && <ComingSoon/>}
      {firstCategory === 3 && <ComingSoon/>}


    </div>
  );
};