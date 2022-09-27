import {AdvantagesProps} from './Advantages.props';
import cn from 'classnames';
import CheckIcon from './check.svg';
import styles from './Advantages.module.css';


export const Advantages = ({advantages}:AdvantagesProps):JSX.Element =>{
 return (
   <div className={styles.advantages}>
     {advantages.map(a=>(
       <div className={styles.advantage} key={a._id}>
        <CheckIcon className={styles.icon}/>
         <div  className={styles.title}>{a.title}</div>
         <hr className={styles.vline} />
         <div className={styles.description}>{a.description}</div>

       </div>
     ))}

   </div>
 );
};