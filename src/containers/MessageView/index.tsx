import React,{ useState, useEffect } from "react"
import { Message } from "../../types/message"
import style from '../../styles/Home.module.scss'
import { MessFromLoggedAuthor } from "../../components/MessageCell/MessFromLoggedAuthor"
import { MessFromOtherAuthor } from "../../components/MessageCell/MessFromOtherAuthor"


export const MessagesView = (props: (Message)) =>{
   
  return(
    <div id={style.containerMess}>
      <div id={style.messageContainer}>
        {props.authorId === 1?
          <MessFromLoggedAuthor authorId={props.authorId} timestamp={props.timestamp} body={props.body} />
          :
          <MessFromOtherAuthor authorId={props.authorId} timestamp={props.timestamp} body={props.body}/>
        }       
      </div>
    </div>
  )
}