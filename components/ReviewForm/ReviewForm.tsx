import {ReviewFormProps} from './ReviewForm.props';
import { useForm ,Controller} from 'react-hook-form';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { IReviewForm } from './ReviewForm.interface';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import CloseIcon from './x-icon.svg';



export const ReviewForm = ({productId,className, ...props}:ReviewFormProps):JSX.Element =>{
  const { register, control, handleSubmit, formState: { errors }, reset, clearErrors ,getValues} = useForm<IReviewForm>();
  const onSubmit = (data:IReviewForm) => console.log(data);
 return (
   <form onSubmit={handleSubmit(onSubmit)}>
   <div className={cn(styles.reviewForm,className)} {...props} >
     <Input error={errors.name} {...register('name',{required:{value:true,message:'Заполните имя'}})} placeholder={'Имя'}/>
     <Input  error={errors.title} {...register('title',{required:{value:true,message:'Заполните заголовок'}})} className={styles.title} placeholder={'Заголовок отзыва'}/>
     <div className={styles.rating}>
       <span>Оценка:</span>
       <Controller control={control} name={'rating'} render={({field})=>(<Rating isEditable ref={field.ref} setRating={field.onChange} rating={field.value}/>)}/>


     </div>
     <TextArea error={errors.description} {...register('description',{required:{value:true,message:'Обязательное описание'}})} placeholder={'Текст отзыва'} className={styles.description}/>
     <div className={styles.submit}>
       <Button type={'submit'} appearance={'primary'}>Отправить</Button>
       <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
     </div>
   </div>
     <div className={styles.success}>
       <div className={styles.successTitle}>Ваш отзыв отправлен</div>
       <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
       <CloseIcon className={styles.close}/>
     </div>
   </form>
 );
};