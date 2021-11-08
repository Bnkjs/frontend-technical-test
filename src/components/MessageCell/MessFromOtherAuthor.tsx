import React, { FC, useState } from "react"
import style from '../../styles/Home.module.scss'
import { Message } from "../../types/message"

export const MessFromOtherAuthor = (props: (Message)) =>{
  const [isClicked, setIsClicked] =  useState(false)

return(
    <div className={style.otherAuthorMess}>
      {isClicked && <p className={style.messTimestamp}>{props.timestamp}</p>}
      <p className={style.messBody} onClick={()=>setIsClicked(!isClicked)}>{props.body}</p>
    </div>
  )
}