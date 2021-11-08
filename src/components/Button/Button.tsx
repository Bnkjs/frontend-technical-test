import React, {FC} from "react"
import style from '../../styles/Home.module.scss'

export const Button = (props) => {
  return(
    <button disabled={props.isDisabled} ref={props.btnRef} onClick={props.onClick} className={style.btnSend}>Envoyer</button>
  )
}