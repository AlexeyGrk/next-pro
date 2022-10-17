import styles from './MainSearchComponent.module.css';
import { MainSearchComponentProps } from './MainSearchComponent.props';
import { arraySearch } from '../../heplers/helpers';
import { useRouter } from 'next/router';
import { Htag } from '../Htag/Htag';
import { Devider } from '../Devider/Devider';
import NotFound from '../../heplers/icons/not-found.svg';
import { Pbig } from '../Pbig/Pbig';


export const MainSearchComponent = ({products}: MainSearchComponentProps): JSX.Element => {
  const router = useRouter();
  const result = router?.query?.q && arraySearch(products.map(i => i.pages).flat(1), router?.query?.q);

  return (
    <div className={styles.wrapper}>
      <Htag className={styles.heading} tag={'h2'}>Вот что мы нашли по вашему запросу : <span className={styles.searchText}>{`${router.query ? router?.query.q : 'Загружаем...'}`}</span></Htag>
      <div className={styles.list}>
        {result && result.length ? result.map((i) =>
          <div className={styles.listItem} key={i._id}>
            <a className={styles.listLink} href={`/courses/${i.alias}`}>{i.title}</a>
            <Devider/>
          </div>
        ) : <div className={styles.notFoundContainer}>
          <span >По вашему запросу ничего не найдено</span>
          <span >Попробуйте, еще раз (например: Аналитика) </span>
         <NotFound className={styles.notFoundIcon} />
        </div>}

      </div>


    </div>
  );
};