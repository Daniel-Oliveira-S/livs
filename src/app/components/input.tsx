import react, { Children } from 'react';
import styles from './page.module.css'

type InputProps = {
  type: string;
  placeholder: string;
  id?: string;
  value?: string;
  onChange?: (e: any) => void;
  step?: number
  max?: number
  min?: number
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  defaultValue?: string;
}

export default function Input(Props: InputProps) {
 


  return (
    <div>
      <input type={Props.type} className={styles.input} placeholder={Props.placeholder} id={Props.id} value={Props.value} defaultValue={Props.defaultValue} onChange={Props.onChange} min={Props.min} step={Props.step} max={Props.max} />
    </div>
  )
}

