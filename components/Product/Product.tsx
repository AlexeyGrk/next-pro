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
import { useState } from 'react';
import { Review } from '../Review/Review';


export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
  const [isReviewOpened,setIsReviewOpened] = useState<boolean>(false);
  return (
    <>
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70}/>
      </div>
      <div className={styles.title}>
        {product.title}
      </div>
      <div className={styles.price}>
        {priceUa(product.price / 2)}
        {product.oldPrice && <Tag className={styles.oldPrice} color={'green'}>{priceUa((product.price / 2 - product.oldPrice / 2))}</Tag>}
      </div>
      <div className={styles.credit}>
        {priceUa(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product?.reviewAvg ?? product.initialRating}/>
      </div>
      <div className={styles.tags}>
        {product.categories.map(category => <Tag className={styles.category} color={'ghost'} key={category}>{category}</Tag>)}
      </div>
      <div className={styles.priceTitle}>
        цена
      </div>
      <div className={styles.creditTitle}>
        кредит
      </div>
      <div className={styles.ratingTitle}>
        {product.reviewCount} {declOfNum(product.reviewCount,['отзыв', 'отзыва','отзывов'])}
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
        <Button appearance={'ghost'} className={styles.reviewButton} onClick={()=>setIsReviewOpened(prevState => !prevState)} arrow={isReviewOpened ? 'down' : 'right'}>Читать отзывы</Button>
      </div>

    </Card>
      <Card color={'blue'} className={cn(styles.reviews,{
        [styles.opened] : isReviewOpened,
        [styles.closed] : !isReviewOpened
      })}>
        {product.reviews && product.reviews.map(rev=>(<Review key={rev._id} review={rev}/>))}
      </Card>
    </>
  );
};