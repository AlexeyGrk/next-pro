import {LayoutProps} from './Layout.props';
import { KeyboardEvent, useRef } from 'react';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { FunctionComponent, useState } from 'react';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Up } from '../components';
import cn from 'classnames';


const Layout = ({children}:LayoutProps):JSX.Element =>{
  const [isSkipLinkDisplayed,setIsSkipLinkDisplayed] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const skipContentAction = (key:KeyboardEvent)=>{
    if(key.code==='Space'|| key.code === 'Enter'){
      key.preventDefault();
      bodyRef.current?.focus();
      setIsSkipLinkDisplayed(false);

    }else{
      setIsSkipLinkDisplayed(false);
    }
  };
 return (
   <div className={styles.wrapper}>
     <a tabIndex={1}
        onFocus={()=>setIsSkipLinkDisplayed(true)}
        onKeyDown={skipContentAction}
        className={cn(styles.skipLink,{
       [styles.displayed]:isSkipLinkDisplayed
     })}>Сразу к содержанию</a>
    <Header className={styles.header}/>
       <Sidebar className={styles.sidebar}/>
       <div ref={bodyRef} tabIndex={0} className={styles.body}>
         {children}
       </div>

    <Footer className={styles.footer}/>
    <Up/>
   </div>
 );
};

export const withLayout = <T extends Record<string,unknown> & IAppContext> (Component:FunctionComponent<T>) => {
  return function withLayoutComponent(props:T):JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props}/>
        </Layout>
      </AppContextProvider>

    );

  };

};