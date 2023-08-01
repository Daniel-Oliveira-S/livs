'use client'


import Image from 'next/image'
import styles from './page.module.css'
import logo from './assets/Liv-Capital_1.svg'
import Divider from './components/divider'
import Input from './components/input'
import react, { useRef } from 'react'
import { Calculator } from 'lucide-react'
import Header from './components/header'
import Route from './components/route'
import {PrismaClient} from '@prisma/client'

export default function Home() {

  const [inputValue, setInputValue] = react.useState('')

  const handleChange = (e: any) => { 
    setInputValue(e.target.value)
  }

  const numberOne = () => {
    setInputValue('1')
  }
  const numberFive = () => {
    setInputValue('5')
  }

  const numberTen = () => {
    setInputValue('10')

  }

  const numberFifteen = () => {
    setInputValue('15')
  }
  
  const numberTwenty = () => {
    setInputValue('20')
  }
  
  return (
    <body className={styles.body}>
    <Header />

      <main className={styles.main}>
        
        <div className={styles.form}>
          <label htmlFor="value" className={styles.quantity}>Quanto quer Investir?</label>
          <Input id='value' type='number' placeholder="R$0,00"  min={100} />
          <Divider />
      
          <div className={styles.years}>
          <label htmlFor="time" className={styles.time}>Por quanto tempo quer investir? (a.a)</label>
            <Input id='time' type='text' placeholder="Selecione ou digite" value={`${inputValue}`} onChange={handleChange} defaultValue="string"  min={0} step={5} />
            <div className={styles.buttons}>
              <button onClick={numberOne}>1 ano</button>
              
              <button onClick={numberFive} >5 anos</button>
              <button onClick={numberTen}> 10 anos</button>
              <button onClick={numberFifteen}>15 anos</button>
              <button onClick={numberTwenty}>20 anos</button>

              
              
              </div>
          </div>

          <Divider />


          <Route href='./form'>Próximo</Route>
        </div>
        
        
          <footer className={styles.footer}>
        <p>Desenvolvido por&nbsp;<a className={styles.daniel} href="https://www.instagram.com/eudannielsz/" target='_blank'>Daniel Souza</a>
         &nbsp;e&nbsp;
          <a className={styles.queijo} href="https://www.instagram.com/aqueijoegoiabada/" target='_blank'>Queijo&Goiabada</a>
          &nbsp;=)
        </p>
        
      </footer>
      </main>
      

     

      
     
      </body>
  )
}
