import axios from "axios";
import { Conversation } from "../types/conversation";

const FetchConversationsFromUserId = async (getConversationUrl: string, user_id: number): Promise<Conversation[] | unknown> => {
   return await axios.get(getConversationUrl + user_id)
    .then((res)=> res.data)
    .catch((error) => console.log(error)
    )
 }

export default FetchConversationsFromUserId