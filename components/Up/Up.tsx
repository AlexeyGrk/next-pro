import cn from 'classnames';
import styles from './Up.module.css';
import ArrowUpIcon from './arrow-up.svg';
import { useScrollY } from '../../hooks/useScrollY';
import { useAnimation,motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(()=>{
    controls.start({opacity: y / document.body.scrollHeight});
  },[y,controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={cn(styles.up)}
      animate={controls}
      initial={{opacity:0}}

    >

      <ArrowUpIcon/>
    </motion.button>
  );
};