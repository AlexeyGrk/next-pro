import React from 'react';
import styles from './ButtonIcon.module.css';
import { ButtonIconProps,icons } from './ButtonIcon.props';
import cn from 'classnames';


const ButtonIcon = ({appearance,icon,className,...props}:ButtonIconProps) => {
  const IconComp = icons[icon];
  return (
    <button className={cn(styles.button,className,{
      [styles.primary]:appearance === 'primary',
      [styles.white]:appearance === 'white'
    })} {...props}>
    <IconComp/>
    </button>
  );
};

export default ButtonIcon;
