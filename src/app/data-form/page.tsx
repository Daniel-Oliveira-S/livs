'use client'

import style from "./page.module.css";
import Header from "../components/header";
import React from "react";
import axios from "axios";
import react from 'react';
import Input from "../components/input";





export default function DataForm() { 
  return (
    <div>
      <Header />
      <div className={style.main}>
      
      <div className={style.form}>
          <h2 className={style.title}>
            Preencha com seus Dados
          </h2>
          
          <Input type='text' placeholder='Nome Completo' />
          <Input type='text' placeholder='Email' />
          <Input type='text' placeholder='Whatsapp' />
          
          <div id="result" className={style.result}>
            <button className={style.submit}>Entrar em contato</button>
            <span id='total' className={style.total}>
              
            </span>

             
          </div>
          </div>
      </div>
    </div>
  )
}