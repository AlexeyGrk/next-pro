import {  useState } from 'react';
import type { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../../layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { firstLevelMenu } from '../../heplers/helpers';
import { ParsedUrlQuery } from 'querystring';
import { API } from '../../heplers/api';

import { MainPopularInfo } from '../../components/MainPopularInfo/MainPopularInfo';
import { ProductModel } from '../../interfaces/product.interface';


const Type = ({firstCategory,menu,products}:TypeProps):JSX.Element => {


  return (
    <>
      <MainPopularInfo firstCategory={firstCategory} products={products} menu={menu}/>
    </>
  );
};

export default withLayout(Type);



export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths:firstLevelMenu.map(m=>'/'+m.route),
    fallback: true
  };
};


export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };

  }
  const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true
    };

  }
  const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find,{
    firstCategory:firstCategoryItem.id
  });
  const {data: products} = await axios.post<ProductModel[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id,
  });

  return{
    props:{
      menu,
      firstCategory:firstCategoryItem.id,
      products
    }
  };

};

interface TypeProps extends Record<string, unknown>{
  menu:MenuItem[],
  firstCategory:number;
  products:ProductModel[];
}