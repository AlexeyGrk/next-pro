import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Advantages, Htag, Product, Sort, Tag } from '../../components';
import { WorkData } from '../../components/WorkData/WorkData';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';


export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
  const [{products:sortedProducts,sort},dispatchSort] = useReducer(sortReducer,{products,sort:SortEnum.Rating});


  const setSort = (sort:SortEnum) => {
    dispatchSort({type: sort});
  };

  useEffect(()=>{
    dispatchSort({type:'reset',initialState:products});
  },[products]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={'h1'}>{page?.title}</Htag>

        {products && <Tag color='grey' size={'m'} aria-label={products.length + 'элементов'}>{products.length}</Tag>}
       <Sort sort={sort} setSort={setSort} />
      </div>
      <div role={'list'}>
        {sortedProducts && sortedProducts.map((p,idx) => (<Product idx={idx} role={'listitem'} layout key={p?._id} product={p}/>))}
      </div>
      <div className={styles.workUaTitle}>
        <Htag tag={'h2'}>Вакансии - {page?.category}</Htag>
        <Tag color='blue' size={'m'}>work.ua</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <WorkData {...page?.hh}/>}
      {page?.advantages && page?.advantages.length>1 &&
        <>
          <Htag tag={'h2'}>Преимущества</Htag>
          <Advantages advantages={page?.advantages}/>
        </>
      }
      {page?.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html:page?.seoText}}/> }
      <Htag tag={'h2'}>Получаемые навыки</Htag>
      {page?.tags.map(t=><Tag key={t} color={'primary'}>{t}</Tag> )}
    </div>
  );
};