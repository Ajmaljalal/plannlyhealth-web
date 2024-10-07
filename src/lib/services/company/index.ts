
import { COMAPANY_BASE_URL } from "@/lib/helpers/api-urls";
import axios from "axios";

export const getCompanyById = async (companyId: string) => {
  try {
    const result = await axios.get(`${COMAPANY_BASE_URL}/${companyId}`,);
    return result.data;
  } catch (error) {
    return error;
  }
}