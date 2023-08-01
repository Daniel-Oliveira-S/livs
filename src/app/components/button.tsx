import styles from './page.module.css'

type ButtonProps = {
  type: string;
  children: React.ReactNode;
  href?: string;
  isChecked?: boolean;
}



import React, { useState } from 'react';

export default function Button(Props:ButtonProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button  className={`${styles.checkbox} ${isChecked ? `${styles.checked}` : `${styles.unchecked}`}`} onClick={handleClick}>
        {Props.children}
        
    </button>
  );
};


