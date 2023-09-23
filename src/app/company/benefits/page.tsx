import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BenefitsContainer from "@/containers/company/benefits";
import { GET_EMPLOYEE_BY_EMAIL } from "@/lib/helpers/api-urls";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Benefits = async () => {
  const session: any = await getServerSession(authOptions)

  const employees = await axios.get(`${GET_EMPLOYEE_BY_EMAIL}/email/${session.user.email}`)
  const employee = employees.data[0]
  if (employee.role === 'Standard') {
    return redirect('/')
  }
  return <BenefitsContainer />;
}

export default Benefits;