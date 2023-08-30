import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import DashboardContainer from '@/containers/company/dashboard';
import { employeesBaseUrl } from '@/lib/helpers';
import axios from 'axios';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session: any = await getServerSession(authOptions)

  const employees = await axios.get(`${employeesBaseUrl}/email/${session.user.email}`)
  const employee = employees.data[0]
  if (employee.role === 'Standard') {
    return redirect('/')
  }
  return <DashboardContainer />
}

export default Dashboard;