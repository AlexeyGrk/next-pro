import type { GetStaticProps } from 'next';
import axios from 'axios';
import { Htag} from '../components';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../heplers/api';


const Home= ({menu}:HomeProps):JSX.Element => {

  return (
    <>
      <Htag tag='h1'>Выбери свое будущее!</Htag>

    </>
  );
};

export default withLayout(Home);


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