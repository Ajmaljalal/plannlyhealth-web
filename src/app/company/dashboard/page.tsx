import DashboardContainer from '@/containers/company/dashboard';
import { checkAuth } from '@/lib/helpers';

const Dashboard = async () => {
  await checkAuth()
  return <DashboardContainer />
}

export default Dashboard;