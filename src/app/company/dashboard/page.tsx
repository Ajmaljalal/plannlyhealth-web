import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import DashboardContainer from '@/containers/company/dashboard';
import { getEmployeeByEmail } from '@/lib/services/employee';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session: any = await getServerSession(authOptions)

  const employee: any = await getEmployeeByEmail(session?.user?.email as string)
  if (employee?.role === 'Standard') {
    return redirect('/')
  }
  return <DashboardContainer />
}

export default Dashboard;