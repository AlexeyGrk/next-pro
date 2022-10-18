import styles from './ComingSoon.module.css';
import ComingSoonIcon from '../../heplers/icons/err.svg';
import { Pbig } from '../Pbig/Pbig';


export const ComingSoon = ():JSX.Element =>{
 return (
  <div className={styles.wrapper}>
    <Pbig className={styles.text}>Прямо сейчас, в эту минуту , мы разрабатываем эту страницу... </Pbig>
    <ComingSoonIcon className={styles.picture}/>
  </div>
 );
};