import axios from "axios";
import { ASSESSMENTS_BASE_URL, START_BASELINE_ASSESSMENT } from "@/lib/helpers/api-urls";
import { Question } from "@/lib/types/assessments";

export const startBaselineAssessment = async () => {
  try {
    const result = await axios.get(`${START_BASELINE_ASSESSMENT}`);
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