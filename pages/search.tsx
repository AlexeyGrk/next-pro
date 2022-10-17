import type { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../heplers/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ErrorIcon from '../heplers/icons/err.svg';
import { ProductModel } from '../interfaces/product.interface';
import { arraySearch } from '../heplers/helpers';




const Search = ({products}:HomeProps):JSX.Element => {
  const router = useRouter();
  const [resultSearch,setResultSearch]=useState(null);

  return (
    <>
      {/*<ErrorIcon/>*/}
      Вот что мы нашли по вашему запросу : {`${router.query ? router?.query.q : 'Поиск...'}`}
      {router?.query?.q && products && arraySearch(products.map(i=>i.pages).flat(1),router?.query?.q).map((i)=><div key={i._id}>{i.title}</div>)}

      {/*{router.query && products.map(i=>i).includes(router?.query.q)}*/}
    </>
  );
};

export default withLayout(Search);


export const getStaticProps: GetStaticProps<HomeProps> = async  () => {
  const firstCategory = 0;
  const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find,{
    firstCategory
  });
  const {data: products} = await axios.post<ProductModel[]>(API.topPage.find, {
    firstCategory: firstCategory,
  });
  return{
    props:{
      menu,
      firstCategory,
      products
    },
  };

};

interface HomeProps extends Record<string, unknown>{
  menu:MenuItem[],
  firstCategory:number;
  products:ProductModel[];

}