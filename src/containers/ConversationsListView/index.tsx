import React, {FC, useEffect, useState} from "react"
import { ALL_MESSAGES_FROM_CONVERSATION_ID, ALL_USERS, POST_NEW_MESSAGE, USER_ID } from '../../utils/urlsUtils'
import { MessagesView } from "../MessageView"
import FetchMessageFromConversationId, { PostNewMessage } from "../../services/messages"
import style from '../../styles/Home.module.scss'
import { getLoggedUserId } from "../../utils/getLoggedUserId"
import { PostAMessage } from "../../components/Form/Form"
import { currentDate, timestampToDate } from "../../utils/dateUtils"
import { userLoggedName } from "./utils"

export const ConversationsListView = (conv) => {
  const [resMessages, setResMessages] = useState([])
  const [isClicked, setIsClicked] =  useState(false)
  const [postNewMess, setpostNewMess] = useState(undefined)
  const [render, setRender] = useState(false)

  const getMessageEqualSameConvId = resMessages.map(mess => {
    if(mess.conversationId === conv.id){
      return mess
    }
  })
  
  const postNewMessage = () => {
    PostNewMessage(POST_NEW_MESSAGE, conv.id, postNewMess, currentDate, getLoggedUserId())
    .then(res=> console.log(res)
    )
    setRender(!render)
  }
  
 useEffect(()=>{
  FetchMessageFromConversationId(ALL_MESSAGES_FROM_CONVERSATION_ID, conv.id)
  .then(res => setResMessages(res))
 },[render])

  return(
    <div id={style.containerConv}>
      <div id={style.convHeader} onClick={()=> {setIsClicked(!isClicked)}}>
          <h3 className={style.recipNickname}>
            { conv.recipientNickname === userLoggedName?
              conv.senderNickname : conv.recipientNickname
            }
          <span> 📩 </span>
          </h3>
          <p className={style.lastTimestampMess}> Dernier messsage: {timestampToDate(conv.lastMessageTimestamp)}</p>
      </div>
        {isClicked && 
          getMessageEqualSameConvId.map((mess, index) => {
            return (
              <div className={style.messView} key={index} id={style.messagesDisplay}>
                <MessagesView 
                  authorId={mess.authorId} 
                  body={mess.body}
                  timestamp={timestampToDate(mess.timestamp)}
                  key={index}
                />
              </div>
            )
          })
        }
        {isClicked && 
          <PostAMessage onChange={(e)=>{setpostNewMess(e.target.value)}} onSubmit={postNewMessage}/>
        }
        
    </div>
  )
 }


