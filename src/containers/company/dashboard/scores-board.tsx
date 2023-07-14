import { icons } from "@/lib/icons";
import Image from "next/image";
import CircularProgressBar from "./error-risk-chart";

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

const ScoresBoard = () => {
  return (
    <div className="flex justify-end items-center bg-basic_grey_5 w-full h-[100px] px-[55px] pl-[240px] rounded-[32px] mt-[50px] mb-[70px] relative" >
      <div className="w-[150px] h-[150px] absolute left-[-20px] top-[-50%]">
        <CircularProgressBar value={80} colors={['#FDE7EE', '#FDE7EE']} />
      </div>
      <div className="flex justify-between items-center flex-1">
        {data.map((item, index) => {
          return (
            <div key={index} className='max-w-[230px] flex items-center gap-4'>
              <div className='w-[50px] h-[50px] bg-basic_white rounded-[50%] flex items-center justify-center shadow-lg'>
                <Image src={item.icon} alt='plannly logo' />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h3 className="font-normal">{item.percentage}%</h3>
                <p className=''>{item.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ScoresBoard;