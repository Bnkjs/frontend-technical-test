import axios from "axios";
import { Message } from "../types/message";

const FetchMessageFromConversationId = async (getMessageUrl: string, conversation_id: number): Promise<Message[] | unknown> => {
   return await axios.get(getMessageUrl + conversation_id)
    .then((res)=> res.data)
    .catch((error) => console.log(error)
    )
 }

 export const PostNewMessage = async (postMessageUrl: string, conversationId: number, body: string, timestamp: number, authorId: number) => {
    return await axios.post(postMessageUrl, {
       conversationId,
       body,
       authorId,
       timestamp
    })
    .then((res)=> res.data)
    .catch((error) => console.log(error)
    )
 }

export default FetchMessageFromConversationId