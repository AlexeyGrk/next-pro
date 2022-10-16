import { CoursesInfoProps } from './CoursesInfo.props';
import styles from './CoursesInfo.module.css';
import Triangle from '../../heplers/icons/triangle.svg';
import Dots from '../../heplers/icons/dots.svg';
import { Card } from '../Card/Card';
import { motion } from 'framer-motion';
import { firstLevelMenu } from '../../heplers/helpers';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { Htag } from '../Htag/Htag';


export const CoursesInfo = ({menu,products}:CoursesInfoProps):JSX.Element =>{
  const router = useRouter();
  const buildSecondLevel = (products: any,secondCategory:string) => {
    return (
      <ul className={styles.secondBlock}>
        {products.map((product:any)=>{
          if(product._id.secondCategory===secondCategory){
            return (<li className={styles.secondBlockItem} key={secondCategory}>{product.pages.slice(0,3).map((page)=><a  className={styles.secondBlockItemLink}  href={`${router?.query ? router?.query?.type : ''}/${page.alias}`}>{page.title}</a>)}</li>);
          }
        })}
      </ul>
    );

  };
  return (
    <div className={styles.wrapper}>
      <a href={'https://pathfinder.jobs/'} target={'_blank'}>
        <div className={styles.decor}>
          <Triangle className={styles.triangle}/>
          <span className={styles.text}>Не уверены в специальности?</span>
          <span className={styles.link}>Пройдите тест</span>
          <Dots className={styles.dots}/>
        </div>
      </a>
      <h2 >Популярные курсы по направлениям</h2>

      <ul className={styles.cardList}>
        {menu && menu.map((i,idx)=>(
          <motion.div key={i._id.secondCategory} whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.8 }}
                      // style={{ x: 100 }}
          >
            <Card className={cn(styles.card,{
              [styles.odd]:idx%2===0,
              [styles.even]:idx%2!==0
            })} color={'blue'} key={i._id.secondCategory}>
             <h3  className={styles.title}>
               {i._id.secondCategory}
             </h3>
                {buildSecondLevel(products,i._id.secondCategory)}
            </Card>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};