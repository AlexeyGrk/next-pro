import type { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../heplers/api';
import { ProductModel } from '../interfaces/product.interface';


const Search = ():JSX.Element => {


  return (
    <>
      Hello , this is Search

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
      firstCategory
    }
  };

};

interface HomeProps extends Record<string, unknown>{
  menu:MenuItem[],
  firstCategory:number;
}