
import { EMPLOYEE_BASE_URL, GET_EMPLOYEE_BY_EMAIL } from "@/lib/helpers/api-urls";
import axios from "axios";

export const getEmployeeById = async (employeeId: string) => {
  try {
    const result = await axios.get(`${EMPLOYEE_BASE_URL}/${employeeId}`,);
    return result.data;
  } catch (error) {
    return error;
  }
}

export const getEmployeeByEmail = async (email: string) => {
  try {
    const employees = await axios.get(`${GET_EMPLOYEE_BY_EMAIL}/${email}`)
    const employee = employees.data[0]
    return employee
  } catch (error) {
    return error;
  }
}