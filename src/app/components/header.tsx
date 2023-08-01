import styles from '../page.module.css'
import Image from 'next/image';
import logo from '../assets/Liv-Capital_1.svg';
import { Calculator } from 'lucide-react';
import style from './page.module.css';
import React from 'react';
import Links from './Links';

export default function Header() { 
 
  return (


    <header className={styles.header}>
    <h2 className={styles.logo}>
      <Image alt='Logo Liv Capital' width={240} height={80} src={logo}></Image>
      </h2>
      <nav className={styles.ul}>
       
        
          <ul className={style.ul}>
            <li><Links href=''>+Renda</Links></li>
            <li><Links href=''>Serviços</Links></li>
            <li><Links href=''>Atendimento</Links></li>
            <li><Links href=''>Bem Estar</Links></li>
            <li><Links href=''>Resultados</Links></li>
            <li><Links href=''>Pode Confiar</Links></li>
            <li><Links href=''>Investir</Links></li>
          </ul>
        
        </nav>
    <h3 className={styles.simulator}  >
      Calculadora de Investimentos
      <Calculator size={24} aria-label='Icone de Calculadora' />
    </h3>
  </header>
  );
}