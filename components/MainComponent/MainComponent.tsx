import styles from './MainComponent.module.css';
import NextStepIcon from '../../heplers/icons/next-steps.svg';
import { motion } from 'framer-motion';
import { useEffect ,useState} from 'react';


export const MainComponent = ():JSX.Element =>{
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer1);
  }, []);
  const line1 = 'Выбери свою историю успеха';
  const line2 = 'прямо сейчас';
  const line3 = 'Выбери курс ';
  const line4 = 'и начни обучение';
  const sentence = {
    hidden:{
      opacity:1
    },
    visible:{
      opacity: 1,
      transition:{
        delay:0.5,
        staggerChildren:0.08,
      }
    },
  };
  const letter = {
    hidden: {opacity:0,y:50},
    visible:{
      opacity:1,
      y:0
    }
  };


 return (
  <div className={styles.mainPictureWrapper}>
    <NextStepIcon className={styles.mainPicture} />
    <motion.h3 className={styles.loadScreenMessage} variants={sentence} initial={'hidden'} animate={'visible'}>
      {line1.split('').map((char,index)=>{
        return (
          <motion.span key={char + '-' + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
      <br/>
      {line2.split('').map((char,index)=>{
        return (
          <motion.span className={styles.loadScreenMessageLink}  key={char + '-' + index} variants={letter}>
            <a href={'/courses'}>
            {char}
            </a>
          </motion.span>
        );
      })}
    </motion.h3>
    {isVisible && <motion.h3 className={styles.loadScreenMessageBottom} variants={sentence} initial={'hidden'} animate={'visible'}>
      {line3.split('').map((char, index) => {
        return (
          <a  key={char + '-' + index} href={'/courses'}>
            <motion.span className={styles.loadScreenMessageLink}  variants={letter}>
              {char}
            </motion.span>
          </a>
        );
      })}
      {line4.split('').map((char, index) => {
        return (
          <motion.span  key={char + '-' + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}

    </motion.h3>}
  </div>
 );
};