import {ReviewFormProps} from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';

import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import CloseIcon from './x-icon.svg';

export const ReviewForm = ({productId,className, ...props}:ReviewFormProps):JSX.Element =>{
 return (
   <>
   <div className={cn(styles.reviewForm,className)} {...props} >
     <Input placeholder={'Имя'}/>
     <Input className={styles.title} placeholder={'Заголовок отзыва'}/>
     <div className={styles.rating}>
       <span>Оценка:</span>
       <Rating rating={0}/>
     </div>
     <TextArea placeholder={'Текст отзыва'} className={styles.description}/>
     <div className={styles.submit}>
       <Button appearance={'primary'}>Отправить</Button>
       <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
     </div>
   </div>
     <div className={styles.success}>
       <div className={styles.successTitle}>Ваш отзыв отправлен</div>
       <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
       <CloseIcon className={styles.close}/>
     </div>
   </>
 );
};