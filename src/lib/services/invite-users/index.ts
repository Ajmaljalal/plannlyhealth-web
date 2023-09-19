import { NEW_USER_INVITE } from "@/lib/helpers/db-urls";
import axios from "axios";

export const createNewUserInvite = async (user: any) => {
  try {
    const result = await axios.post(`${NEW_USER_INVITE}`, user);
    return result.data;
  } catch (error) {
    return error;
  }
}