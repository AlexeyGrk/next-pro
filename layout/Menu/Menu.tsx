import Link from 'next/link';
import { KeyboardEvent, useEffect, useState } from 'react';
import { useContext } from 'react';
import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../heplers/helpers';
import { motion ,useReducedMotion} from 'framer-motion';


export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const [announce,setAnnounce]=useState< 'closed' | 'opened'| undefined >();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const openSecondLevelKey = (key:KeyboardEvent,secondCategory) => {
    if(key.code==='Space'|| key.code === 'Enter'){
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        setAnnounce(m.isOpened ? 'closed' : 'opened');
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const variants = {
    visible: {
      transition: shouldReduceMotion ? {} : {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  };
  const variantsChildren = {
    visible: {
      opacity: 1,
      height:'auto',
      minHeight:30,
      marginBottom:13
    },
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0, height: 0,minHeight: 0,marginBottom:0}
  };


  const buildFirstLevel = () => {

    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((m) => (
          <li key={m.route}  aria-expanded={m.id === firstCategory}>
            <Link href={`/${m.route}`}>
              <a>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>

              </a>
            </Link>
            {m.id === firstCategory &&  buildSecondLevel(m)}
          </li>
        ))}
      </ul>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu && menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory} >
              <button
                   onKeyDown={(key:KeyboardEvent)=>openSecondLevelKey(key,m._id.secondCategory)}
                   className={styles.secondLevel}
                   aria-expanded={m.isOpened}
                   onClick={() => openSecondLevel(m._id.secondCategory)}>
                {m._id.secondCategory}
              </button>
              <motion.ul
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
                className={cn(styles.secondLevelBlock)}>
                {buildThirdLevel(m.pages, menuItem.route,m.isOpened ?? false)}
              </motion.ul>

            </li>
          );
        })}
      </ul>
    );

  };
  const buildThirdLevel = (pages: PageItem[], route: string,isOpened:boolean) => {
    return (
      pages.map(page => (
        <motion.li key={page._id} variants={variantsChildren}>
          <Link href={`/${route}/${page.alias}`}>
            <a tabIndex={isOpened?0:-1} aria-current={`/${route}/${page.alias}` === router.asPath ? 'page' : false} className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
            })}>
              {page.category}
            </a>
          </Link>
        </motion.li>


      ))
    )

  };


  return (
    <nav className={styles.menu}>
      {announce && <span role={'log'} className={'visuallyHidden'}>{announce ==='opened'? 'развернуто':'свернтуто'}</span>}
      {buildFirstLevel()}
    </nav>
  );
};