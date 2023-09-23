import axios from "axios";
import { NEW_USER_INVITE } from "@/lib/helpers/api-urls";

export const createNewUserInvite = async (user: any) => {
  try {
    const result = await axios.post(`${NEW_USER_INVITE}`, user);
    return result.data;
  } catch (error) {
    return error;
  }
}