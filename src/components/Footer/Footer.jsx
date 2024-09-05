import React from 'react';
import styles from '../../styles/Font.module.css';

export default function Footer() {
  return (
    <div className='dark:bg-neutral-900 bg-white py-2 w-full flex items-center'>
      <div className={` ${styles.quicksandSubHeadingSub} container mx-auto text-center text-neutral-800 max-w-6xl font-semibold`}>
        Copyright © 2024 EQuran.san. Made by Sandy from Indonesia with ❤️
      </div>
    </div>
  );
}
