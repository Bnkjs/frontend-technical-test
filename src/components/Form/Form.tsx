import React,{useEffect, useRef, useState} from "react"
import { Button } from "../Button/Button"
import { bgBtnDisable, bgBtnEnable, emptyInputValue, keyPress } from "./utils"
import style from '../../styles/Home.module.scss'

export const PostAMessage = ({ onChange, onSubmit }) => {
  const btnRef= useRef(null)
  const inputRef = useRef(null)
  const [btnDisabled, setBtnDisabled] = useState(true)

  useEffect(()=>{    
    if(inputRef.current.value !== emptyInputValue){
      setBtnDisabled(false)
      btnRef.current.style.background= bgBtnEnable.bg
      btnRef.current.style.color= bgBtnEnable.color
      console.log(btnRef.current.disabled);

   } else{
      setBtnDisabled(true)
      btnRef.current.style.background=bgBtnDisable.bg
      btnRef.current.style.color=bgBtnDisable.color
      console.log(btnRef.current);

   }  
  }, [onChange])

  return(
    <div id={style.input_w_Btn}>
      <form className={style.form} action="" onSubmit={onSubmit}>
        <input 
          ref={inputRef} 
          className={style.inputForm}
          placeholder="Écrivez votre message" 
          type="text" 
          onChange={onChange} 
        />
      </form>
      <div className={style.btn}>
        <Button isDisabled={btnDisabled} btnRef={btnRef} onClick={onSubmit}/>
      </div>
    </div>
  )
}