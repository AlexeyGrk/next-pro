import type { GetStaticProps, NextPage } from 'next';
import { Htag, Button, Pbig, Tag, Rating } from '../components';
import { useState } from 'react';
import { withLayout } from '../layout/Layout'


const Home: NextPage = () => {
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
    </>
  );
};

export default withLayout(Home);


export const getStaticProps: GetStaticProps = async  () => {
  return{
    props:{

    }
  }

};