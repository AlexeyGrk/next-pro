import type { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../heplers/api';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ErrorIcon from '../heplers/icons/err.svg';


const Search = ():JSX.Element => {
  const router = useRouter();
  const [err,setErr]=useState(false);


  return (
    <>
      <ErrorIcon/>
      Вот что мы нашли по вашему запросу : {`${router.query ? router?.query.q : 'Поиск...'}`}

    </>
  );
};

export default withLayout(Search);


export const getStaticProps: GetStaticProps<HomeProps> = async  () => {
  const firstCategory = 0;
  const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find,{
    firstCategory
  });

  return{
    props:{
      menu,
      firstCategory,
      notFound: true,
    },
  };

};

interface HomeProps extends Record<string, unknown>{
  menu:MenuItem[],
  firstCategory:number;
}