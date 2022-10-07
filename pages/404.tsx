import React from 'react';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';


export const Error404 = ():JSX.Element => {
  return (
    <div>
      <Htag tag={'h1'}>404 Error</Htag>

    </div>
  );
};

export default  withLayout(Error404);