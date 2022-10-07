import React from 'react';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';


const Error500 = ():JSX.Element => {
  return (
    <div>
      <Htag tag={'h1'}>500 Error</Htag>

    </div>
  );
};

export default  withLayout(Error500);