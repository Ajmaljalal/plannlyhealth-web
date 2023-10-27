import axios from "axios";
import { ASSESSMENTS_BASE_URL, START_BASELINE_ASSESSMENT, START_MONTHLY_ASSESSMENT } from "@/lib/helpers/api-urls";

export const startBaselineAssessment = async () => {
  try {
    const result = await axios.get(`${START_BASELINE_ASSESSMENT}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

export const startMonthlyAssessment = async (type: string) => {
  try {
    const result = await axios.get(`${START_MONTHLY_ASSESSMENT}/${type}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

export const createAssessment = async (assessment: any) => {
  try {
    const result = await axios.post(`${ASSESSMENTS_BASE_URL}`, assessment);
    return result.data;
  } catch (error) {
    return error;
  }
}

export const createAssessmentProgress = async (user: any) => {
  try {
    const result = await axios.post(`${ASSESSMENTS_BASE_URL}/progress`, user);
    return result.data;
  } catch (error) {
    return error;
  }
}