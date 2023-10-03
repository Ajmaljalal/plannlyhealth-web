
import { EMPLOYEE_BASE_URL, GET_EMPLOYEE_BY_EMAIL } from "@/lib/helpers/api-urls";
import axios from "axios";

export const createEmployee = async (employee: any) => {
  try {
    const result = await axios.post(`${EMPLOYEE_BASE_URL}`, employee);
    return result.data;
  } catch (error) {
    return error;
  }
}

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

export const getEmployeesByCompanyId = async (companyId: string) => {
  try {
    const employees = await axios.get(`${EMPLOYEE_BASE_URL}/company/${companyId}`)
    return employees.data
  } catch (error) {
    return error;
  }
}

export const updateEmployee = async (employee: any) => {
  try {
    const updatedEmployee = await axios.put(`${EMPLOYEE_BASE_URL}/${employee.id}`, employee)
    return updatedEmployee.data
  } catch (error) {
    return error;
  }
}