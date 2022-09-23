import type { GetStaticProps } from 'next';
import axios from 'axios';

import { withLayout } from '../../layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { firstLevelMenu } from '../../heplers/helpers';
import { ParsedUrlQuery } from 'querystring';


const Type = ({firstCategory}:TypeProps):JSX.Element => {


  return (
    <>
      Hello , this is Type # <span>{firstCategory}</span>

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
  const {data:menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN+'/api/top-page/find',{
    firstCategory:firstCategoryItem.id
  });
  return{
    props:{
      menu,
      firstCategory:firstCategoryItem.id
    }
  };

};

interface TypeProps extends Record<string, unknown>{
  menu:MenuItem[],
  firstCategory:number;
}