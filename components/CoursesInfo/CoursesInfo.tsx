import { CoursesInfoProps } from './CoursesInfo.props';
import styles from './CoursesInfo.module.css';
import Triangle from '../../heplers/icons/triangle.svg';
import Dots from '../../heplers/icons/dots.svg';
import { Card } from '../Card/Card';
import { motion } from 'framer-motion';
import { firstLevelMenu } from '../../heplers/helpers';
import { useRouter } from 'next/router';


export const CoursesInfo = ({menu,products}:CoursesInfoProps):JSX.Element =>{
  const router = useRouter();
  const buildSecondLevel = (products: any,secondCategory:string) => {
    return (
      <div>
      <ul className={styles.secondBlock}>
        {products.map((product:any)=>{
          if(product._id.secondCategory===secondCategory){
            return (<li key={secondCategory}>{product.pages.slice(0,3).map((page)=><a href={`${router?.query ? router?.query?.type : ''}/${page.alias}`}>{page.title}</a>)}</li>);
          }
        })}
      </ul>
      </div>
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

      <ul className={styles.cardList}>
        {menu && menu.map(i=>(
          <motion.div key={i._id.secondCategory} whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      style={{ x: 100 }}>
            <Card className={styles.card} color={'blue'} key={i._id.secondCategory}>
              {i._id.secondCategory}
                {buildSecondLevel(products,i._id.secondCategory)}
            </Card>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};