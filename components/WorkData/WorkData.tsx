import {WorkDataProps} from './WorkData.props';
import cn from 'classnames';
import RateIcon from './rate.svg';
import styles from './WorkData.module.css';
import { Card } from '../Card/Card';
import { priceUa } from '../../heplers/helpers';

export const WorkData = ({count,juniorSalary,middleSalary,seniorSalary}:WorkDataProps):JSX.Element =>{
 return (
   <div className={styles.workUa}>
     <Card className={styles.count}>
       <div className={styles.title}>Всего вакансий</div>
       <div className={styles.countValue}> {count}</div>
     </Card>
     <Card className={styles.salary}>
       <div>
         <div className={styles.title}>Начальный</div>
         <div className={styles.salaryValue}>{priceUa(juniorSalary/2)}</div>
         <div className={styles.rate}>
           <RateIcon className={styles.filled}/>
           <RateIcon/>
           <RateIcon/>
         </div>
       </div>
       <div>
         <div className={styles.title}>Средний</div>
         <div className={styles.salaryValue}>{priceUa(middleSalary/2)}</div>
         <div className={styles.rate}>
           <RateIcon className={styles.filled}/>
           <RateIcon className={styles.filled}/>
           <RateIcon/>
         </div>
       </div>
       <div>
         <div className={styles.title}>Профессионал</div>
         <div className={styles.salaryValue}>{priceUa(seniorSalary/2)}</div>
         <div className={styles.rate}>
           <RateIcon className={styles.filled}/>
           <RateIcon className={styles.filled}/>
           <RateIcon className={styles.filled}/>
         </div>
       </div>
     </Card>

   </div>
 );
};