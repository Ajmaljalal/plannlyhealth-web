import { icons } from '@/lib/icons';
import Image from 'next/image';

const data = [
  {
    name: 'High Workload',
    percentage: 73,
    icon: icons.workloadLight
  },
  {
    name: 'Stress Level',
    percentage: 82,
    icon: icons.stressLight
  },
  {
    name: 'Burnout Risk',
    percentage: 66,
    icon: icons.burnoutLight
  },
  {
    name: 'Turnover Risk',
    percentage: 80,
    icon: icons.turnoverLight
  },
]

const Dashboard = () => {

  const renderStatitics = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className='max-w-[230px] flex items-center gap-4'>
          <div className='w-[50px] h-[50px] bg-basic_white rounded-[50%] flex items-center justify-center shadow-lg'>
            <Image src={item.icon} alt='plannly logo' />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3>{item.percentage}%</h3>
            <p className=''>{item.name}</p>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="flex flex-col m-auto">
      <h2>Workforce Insight</h2>
      <div className="m-auto flex justify-evenly items-center bg-basic_grey_5 w-full h-[100px] rounded-[32px] my-[50px]">
        {renderStatitics()}
      </div>
    </div>

  );
}

export default Dashboard;