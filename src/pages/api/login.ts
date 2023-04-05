import { encryptData } from '@/lib/helpers';
import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_PLANNLY_API_DEV}`;

const login = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const result = await axios.post(`${API_URL}/auth/login`, { email, password });
    const user = await axios.get(`${API_URL}/users/${result.data.id}`, {
      headers: {
        Authorization: `Bearer ${result.data.accessToken}`,
      },
    });
    const { accessToken, refreshToken, ...rest } = result.data;
    const access_token = encryptData(accessToken)
    const refresh_token = encryptData(refreshToken)
    const userData = {
      sessionId: access_token,
      refreshId: refresh_token,
      ...rest,
      ...user.data,
    }
    res.json(userData);
  } catch (error) {
    res.json(error);
  }
}

export default login;