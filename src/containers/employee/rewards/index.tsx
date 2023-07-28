import React from 'react'
import Image from 'next/image'
import { icons } from '@/lib/icons'

const healthcareSurveyLotteryOptions = [
  {
    title: "Healing Retreat",
    price: 5000,
    description: "Your survey response could lead you to a life-changing healing retreat weekend at a serene location, and you will receive $5,000 in cash to use as you see fit!",
    id: "WSRV3"
  },
  {
    title: "Gratitude Grants",
    price: 4500,
    description: "By completing the survey, you contribute to a chance of winning gratitude grants worth $4,500 in cash. Use the funds for your professional projects or any personal endeavors!",
    id: "WSRV5"
  },
  {
    title: "Empowerment Bonus",
    price: 3000,
    description: "As a token of appreciation for participating, we offer a chance to win an empowerment bonus of $3,000 in cash. Empower yourself by furthering your education, improving your skills, or pursuing any goal!",
    id: "WSRV4"
  },
  {
    title: "Caring Community",
    price: 2500,
    description: "Complete our survey, and you'll be entered into a lottery for a chance to win $2,500 in cash. Treat yourself to a well-deserved break, invest in your passions, or fulfill any dream!",
    id: "WSRV2"
  },
  {
    title: "Achievement Award",
    price: 2000,
    description: "Unlock the potential to win an achievement award of $2,000 in cash! Celebrate your accomplishments, embark on new ventures, or make your dreams come true!",
    id: "WSRV6"
  },
  {
    title: "Wellness Rewards",
    price: 1500,
    description: "Participate in our survey for a chance to win $1,500 in cash as wellness rewards! Spend it on fitness memberships, healthy meals, or anything that promotes your well-being!",
    id: "WSRV1"
  }
];

const userTickets = {
  title: "tickets to win a reward!",
  totalTickets: 5,
  description: "You have collected 5 tickets so far. The more tickets you earn, the higher your chances of winning exciting rewards!"
};



function RewardsContainer() {
  const renderGiftIncentives = () => {
    return (
      <div>
        <h2 className='font-normal mb-[20px]'>Available Rewards</h2>
        <div className='flex flex-wrap gap-4'>
          {
            healthcareSurveyLotteryOptions.map((options, index) => {
              return (
                <div key={options.id} className='flex flex-1 gap-4 p-[16px] rounded-[32px] bg-basic_grey_5 min-w-[450px]'>
                  <div className='w-[75px] h-[75px] rounded-[18px] bg-basic_white p-[16px]'>
                    <Image src={icons.lottery} width={64} height={64} className='h-auto' alt='options' />
                  </div>
                  <div className='flex-1'>
                    <h3 className=''>${options.price}</h3>
                    <h4 className='font-normal'>
                      {options.title}
                    </h4>
                    <p className='text-small text-basic_grey_1'>{options.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div className='flex flex-col gap-12'>
      <div >
        <h2 className='font-normal mb-[20px]'>Your Tickets</h2>
        <div className='flex gap-4 p-[16px] rounded-[32px] bg-basic_grey_5 min-w-[450px]'>
          <Image src={icons.ticketCircle} width={70} height={0} className='min-w-[70px] ' alt='options' />
          <div className='flex flex-col justify-center'>
            <h3 className='font-normal'>You have <span className='font-bold mx-[10px] text-[38px]'>{userTickets.totalTickets}</span>{userTickets.title}</h3>
            <p className='text-small text-basic_grey_1'>{userTickets.description}</p>
          </div>
        </div>
      </div>
      {renderGiftIncentives()}
    </div>
  )
}

export default RewardsContainer