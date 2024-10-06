import axios from "axios";
import { NEW_USER_BASE_URL, NEW_USER_INVITE } from "@/lib/helpers/api-urls";

export const createNewUserInvite = async (user: any) => {
  try {
    const result = await axios.post(`${NEW_USER_INVITE}`, user);
    return result.data;
  } catch (error) {
    return error;
  }
}

export const getNewUserById = async (userId: string) => {
  try {
    const result = await axios.get(`${NEW_USER_BASE_URL}/${userId}`,);
    return result.data;
  } catch (error) {
    return error;
  }
}

export const getNewUserByEmail = async (email: string) => {
  try {
    const result = await axios.get(`${NEW_USER_BASE_URL}/email/${email}`,);
    return result.data[0];
  } catch (error) {
    return error;
  }
}

export const createBulkNewUserInvite = async (users: any, companyId: string) => {
  try {
    const result = await axios.post(`${NEW_USER_BASE_URL}/bulk-invite/${companyId}`, users);
    return result.data;
  } catch (error) {
    return error;
  }
}

export const deleteNewUser = async (userId: string) => {
  try {
    const result = await axios.delete(`${NEW_USER_BASE_URL}/${userId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}