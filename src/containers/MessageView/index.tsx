import React,{ useState, useEffect } from "react"
import { fetchAllMessages } from "./utils"
import { Message } from "../../types/message"

export const MessagesView = (props: Message) =>{
  const [getMessages, setGetMessages] = useState([])
 
  return(
    <div>
        <div>{props.authorId}</div>
        <div>{props.body}</div>
      </div>
  )
}