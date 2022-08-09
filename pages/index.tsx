import type { GetStaticProps, NextPage } from 'next';
import { Htag, Button, Pbig, Tag, Rating } from '../components';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';


const Home= ({menu}:HomeProps):JSX.Element => {
  const [rating,setRating] = useState<number>(4);


  return (
    <>
      <Htag tag='h1'>Hello</Htag>
      <Button arrow={'right'} appearance={'ghost'} > Click </Button>
      <Pbig size={'s'}> Small</Pbig>
      <Pbig > Medium</Pbig>
      <Pbig size={'l'}> Large</Pbig>
      <Tag size={'s'} color={'green'}>
        small
      </Tag>
      <Tag size={'m'} color={'primary'}>
       medium
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      <ul>
        {menu.map((m)=>(<li key={m._id.secondaryCategory}>{m._id.secondaryCategory}</li>))}
      </ul>

    </>
  );
};

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async  () => {
  const firstCategory = 0;
  const {data:menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN+'/api/top-page/find',{
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