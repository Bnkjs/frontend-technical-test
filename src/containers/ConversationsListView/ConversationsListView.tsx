import { Conversation } from "../../types/conversation"
import { Container, ListConv } from './container.style'
import React,{ useState, useEffect } from "react"

 export const ConversationsListView = (props: Conversation): JSX.Element => {

  return(
    <Container>
      <ListConv>
      {props.senderNickname} - {props.recipientNickname}
      </ListConv>
    </Container>
  )
 }


export default ConversationsListView
