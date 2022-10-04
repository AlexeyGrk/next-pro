import {ReviewFormProps} from './ReviewForm.props';
import { useForm ,Controller} from 'react-hook-form';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import CloseIcon from './x-icon.svg';
import axios from 'axios';
import { API } from '../../heplers/api';
import { useState } from 'react';



export const ReviewForm = ({productId,className, ...props}:ReviewFormProps):JSX.Element =>{
  const { register, control, handleSubmit, formState: { errors }, reset} = useForm<IReviewForm>();
  const [isSuccess,setIsSuccess] =useState<boolean>(false);
  const [isError,setIsError] =useState<string>();
  const onSubmit = async (formData:IReviewForm) => {
    try {
      const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo,{...formData,productId});
      if(data.message){
        setIsSuccess(true);
        reset();
      }else {
        setIsError('Что-то не так');
      }
    }catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
     setIsError(errorMessage);
    }
  };
 return (
   <form onSubmit={handleSubmit(onSubmit)}>
   <div className={cn(styles.reviewForm,className)} {...props} >
     <Input error={errors.name} {...register('name',{required:{value:true,message:'Заполните имя'}})} placeholder={'Имя'}/>
     <Input  error={errors.title} {...register('title',{required:{value:true,message:'Заполните заголовок'}})} className={styles.title} placeholder={'Заголовок отзыва'}/>
     <div className={styles.rating}>
       <span>Оценка:</span>
       <Controller control={control}  rules={{required:{value:true,message:'Укажите рейтинг'}}} name={'rating'} render={({field})=>(<Rating error={errors.rating} isEditable ref={field.ref} setRating={field.onChange} rating={field.value}/>)}/>


     </div>
     <TextArea error={errors.description} {...register('description',{required:{value:true,message:'Обязательное описание'}})} placeholder={'Текст отзыва'} className={styles.description}/>
     <div className={styles.submit}>
       <Button type={'submit'} appearance={'primary'}>Отправить</Button>
       <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
     </div>
   </div>
     {isSuccess && <div className={cn(styles.success,styles.panel)}>
       <div className={styles.successTitle}>Ваш отзыв отправлен</div>
       <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
       <span onClick={()=>setIsSuccess(false)}>
           <CloseIcon className={styles.close} />
       </span>

     </div>}
     {isError && <div className={cn(styles.error,styles.panel)}>
       Что-то пошло не так, попробуйте перезагрузить страницу и попробовать еще раз
       <span onClick={()=>setIsError(undefined)}>
           <CloseIcon className={styles.close} />
       </span>
     </div>}
   </form>
 );
};