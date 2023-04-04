import { decryptData, getSessionIdFromCookie, removeSessionIdFromCookie, setSessionIdToCookie } from "@/lib/helpers";
import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_PLANNLY_API_DEV}`;

export const signIn = async (email: string, password: string) => {
  try {
    const result = await axios.post(`/api/login`, { email, password });
    localStorage.setItem('refreshId', result.data.refreshId)
    setSessionIdToCookie(result.data.sessionId)
    return result.data;
  } catch (error) {
    return error;
  }
}

export const signOut = async () => {
  const sessionId = getSessionIdFromCookie() as string;
  const decryptedSessionId = decryptData(sessionId)

  try {
    const result = await axios.get(`${API_URL}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${decryptedSessionId}`,
      },
    });
    localStorage.removeItem('refreshId')
    removeSessionIdFromCookie()
    return result.data;
  } catch (error: any) {
    return error?.response?.data;
  }
}

export const signUp = async (email: string, password: string) => {
  try {
    const user = await axios.post(`${API_URL}/auth/register`, { email, password });
    return user;
  } catch (error) {
    return error;
  }
}