import cn from 'classnames';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Htag,Tag,Card } from '../../components';
import { WorkData } from '../../components/WorkData/WorkData';


export const TopPageComponent = ({page,products,firstCategory}:TopPageComponentProps):JSX.Element =>{
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={'h1'}>{page.title}</Htag>
        {products && <Tag color='grey' size={'m'}>{products.length}</Tag>}
        <span>Sort</span>
      </div>
      <div>
        {products && products.map(p=>(<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={styles.workUaTitle}>
        <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
       <Tag color='blue' size={'m'}>work.ua</Tag>
      </div>
      <WorkData {...page.hh}/>

    </div>
  );
}