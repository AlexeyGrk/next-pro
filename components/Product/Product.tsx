import { ProductProps } from './Product.props';
import cn from 'classnames';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceUa } from '../../heplers/helpers';
import { Devider } from '../Devider/Devider';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion} from 'framer-motion';
import LearnIcon from '../../heplers/icons/learning.svg';
import ShcoolIcon from '../../heplers/icons/schol.svg';


export const Product = motion(forwardRef(({product, className,idx, ...props}: ProductProps,ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened,setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible:{
      opacity:1,
      height:'auto',
    },
    hidden:{
      opacity:0,
      height:0
    }
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({behavior:'smooth',block:'start'});
    reviewRef.current?.focus();
  };
  return (
    <div ref={ref} className={className} {...props}>
    <Card className={styles.product}>
      <div className={styles.logo}>
        {idx % 2 === 0 ? <LearnIcon className={styles.icon}/> : <ShcoolIcon className={styles.icon}/>}
        {/*<Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70}/>*/}
      </div>
      <div className={styles.title}>
        {product.title}
      </div>
      <div className={styles.price}>
        <span>
          <span className={'visuallyHidden'}>Цена</span>
          {priceUa(product.price / 2)}
        </span>
        {product.oldPrice && <Tag className={styles.oldPrice} aria-hidden={true} color={'green'}>{priceUa((product.price / 2 - product.oldPrice / 2))}</Tag>}
      </div>
      <div className={styles.credit}>
        <span>
           <span className={'visuallyHidden'}>кредит</span>
          {priceUa(product.credit)}/<span className={styles.month}>мес</span>
        </span>

      </div>
      <div className={styles.rating}>
        <span className={'visuallyHidden'}>{'рейтинг' + (product?.reviewAvg ?? product.initialRating)}</span>
        <Rating rating={product?.reviewAvg ?? product.initialRating}/>
      </div>
      <div className={styles.tags}>
        {product.categories.map(category => <Tag  className={styles.category} color={'ghost'} key={category}>{category}</Tag>)}
      </div>
      <div aria-hidden={true} className={styles.priceTitle}>
        цена
      </div>
      <div  aria-hidden={true} className={styles.creditTitle}>
        кредит
      </div>
      <div className={styles.ratingTitle}>
        <a href={'#ref'} onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount,['отзыв', 'отзыва','отзывов'])}</a>
      </div>
      <Devider className={styles.hr}/>

      <div className={styles.description}>
        {product.description}
      </div>
      <div className={styles.feature}>
        {product.characteristics.map((ch,idx)=> idx > 0 && <div className={styles.characteristics} key={ch.name}>
          <span className={styles.characteristicsName}>{ch.name}</span>
          <span className={styles.characteristicsDots}/>
          <span className={styles.characteristicsValue}>{ch.value}</span>
        </div>)}
      </div>

      <div className={styles.advBlock}>
        {product.advantages && <div className={styles.advantages}>
          <div className={styles.advTitle}>
            Преимущества
          </div>

          {product.advantages}
        </div>}
        {product.disadvantages && <div className={styles.disadvantages}>
          <div className={styles.advTitle}>
            Недостатки
          </div>
          {product.disadvantages}
        </div>}


      </div>
      <Devider className={cn(styles.hr, styles.h2) }/>
      <div className={styles.actions}>
        <Button appearance={'primary'}>Узнать подробнее</Button>
        <Button appearance={'ghost'} className={styles.reviewButton} onClick={()=>setIsReviewOpened(prevState => !prevState)} arrow={isReviewOpened ? 'down' : 'right'} aria-expanded={isReviewOpened} >Читать отзывы</Button>
      </div>

    </Card>
      <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial={'hidden'}>
      <Card color={'blue'} className={cn(styles.reviews)} ref={reviewRef} tabIndex={isReviewOpened ? 0 : -1}>
          {product.reviews && product.reviews.map(rev=>
            <div key={rev._id}>
            <Review  review={rev}/><Devider/>
            </div>
          )}
        {isReviewOpened && <ReviewForm isOpened={isReviewOpened} productId={product._id}/>}
      </Card>
      </motion.div>
    </div>
  );
}));