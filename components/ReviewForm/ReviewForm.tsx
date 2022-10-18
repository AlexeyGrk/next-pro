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



export const ReviewForm = ({productId,isOpened,className, ...props}:ReviewFormProps):JSX.Element =>{
  const { register, control, handleSubmit, formState: { errors }, reset,clearErrors} = useForm<IReviewForm>();
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
         <Input error={errors.name}
                tabIndex={isOpened?0:-1}
                aria-invalid={!!errors.name}
                {...register('name',{required:{value:true,message:'Заполните имя'}})}
                placeholder={'Имя'}/>
         <Input  error={errors.title}
                 tabIndex={isOpened?0:-1}
                 aria-invalid={!!errors.title}
                 {...register('title',{required:{value:true,message:'Заполните заголовок'}})}
                 className={styles.title} placeholder={'Заголовок отзыва'}/>
         <div className={styles.rating}>
           <span>Оценка:</span>
           <Controller control={control}  rules={{required:{value:true,message:'Укажите рейтинг'}}} name={'rating'} render={({field})=>(<Rating error={errors.rating} tabIndex={isOpened?0:-1} isEditable ref={field.ref} setRating={field.onChange} rating={field.value}/>)}/>

         </div>
         <TextArea tabIndex={isOpened?0:-1}
                   error={errors.description}
                   aria-invalid={!!errors.description}
                   {...register('description',{required:{value:true,message:'Обязательное описание'}})}
                   placeholder={'Текст отзыва'}
                   aria-label={'Текст отзыва'}
                   className={styles.description}/>
         <div className={styles.submit}>
           <Button onClick={()=>clearErrors()} type={'submit'} tabIndex={isOpened?0:-1} appearance={'primary'}>Отправить</Button>
           <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
         </div>
       </div>
       {isSuccess && <div className={cn(styles.success,styles.panel)} role={'alert'}>
         <div  className={styles.successTitle}>Ваш отзыв отправлен</div>
         <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
         <button className={styles.close} aria-label={'Закрыть оповещение'} onClick={()=>setIsSuccess(false)}>
           <CloseIcon  />
         </button>

       </div>}
       {isError && <div className={cn(styles.error,styles.panel)} role={'alert'}>
         Что-то пошло не так, попробуйте перезагрузить страницу и попробовать еще раз
         <button className={styles.close} aria-label={'Закрыть оповещение'}  onClick={()=>setIsError(undefined)}>
           <CloseIcon  />
         </button>
       </div>}
     </form>

 );
};