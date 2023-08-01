'use client'


import react from "react";
import Header from "../components/header";
import Input from "../components/input";
import styles from "../page.module.css";


import style from "./page.module.css"
import Button from "../components/button";
import Route from "../components/route";
export default function Form() {

  return (
    <body>
      <Header />
      <main className={style.main}>
      <div className={styles.form}>
        <h2 className={styles.tax}>
          Perfil de Investimento
          </h2>
          <div className={style.container}>
          <Button type="submit" >Conservador</Button>
        <Button type="submit" >Moderado</Button>
          
        <Button type="submit" >Arrojado</Button>

      
          </div>
          <Route href="../data-form">Próximo</Route>
        </div>
        </main>
    </body>
  ); 
}

