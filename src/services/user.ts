import axios from "axios";
import { loggedUserId } from "../pages/_app";
import { User } from "../types/user";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import { USER_ID } from "../utils/urlsUtils";

const FetchUserFromId = async (getUserIdUrl: string, userId: number): Promise<User | unknown> => {
   return await axios.get(getUserIdUrl + userId)
    .then((res)=> res.data)
    .catch((error) => console.log(error)
    )
 }
export default FetchUserFromId