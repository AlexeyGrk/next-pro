import type { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../heplers/api';

import { ProductModel } from '../interfaces/product.interface';
import { MainSearchComponent } from '../components/MainSearchComponent/MainSearchComponent';




const Search = ({products}:HomeProps):JSX.Element => {

  return (
    <>
      {<MainSearchComponent products={products}/>}
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