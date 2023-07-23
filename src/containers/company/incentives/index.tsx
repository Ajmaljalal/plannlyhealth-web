'use client'
import { Button } from '@/components/button'
import Toggle from '@/components/toggle'
import { icons } from '@/lib/icons'
import Image from 'next/image'
import React from 'react'

const ptoIncentivesData = [
  {
    id: 1,
    name: '2 days of paid time off (PTO)',
    isAvailable: true,
    icon: '/icons/incentives/pto-incentives.svg'
  },
  {
    id: 2,
    name: '3 days of paid time off (PTO)',
    isAvailable: false,
    icon: '/icons/incentives/pto-incentives.svg'
  }
]

const cashIncentivesData = [
  {
    id: 1,
    name: '$100 Wellness Stipend',
    amount: 100,
    category: 'Wellness',
    isAvailable: false,
    icon: '/icons/incentives/cash-incentives.svg'
  },
  {
    id: 2,
    name: '$250 Education Stipend',
    amount: 250,
    category: 'Education',
    isAvailable: true,
    icon: '/icons/incentives/cash-incentives.svg'
  }
]

const giftIncentivesData = [
  {
    id: 1,
    name: 'Apple Watch Series 8',
    description: 'Incredible device that will help you stay connected, motivated, and empowered to achieve all goals.',
    isAvailable: true,
    icon: '/icons/incentives/apple-watch.png'
  },
  {
    id: 3,
    name: 'Air Pods Pro 2',
    description: 'These wireless earbuds with active noise cancellation will transport you to a world of crystal-clear sound.',
    isAvailable: true,
    icon: '/icons/incentives/earpods.png'
  },
  {
    id: 4,
    name: 'Amazon $150 Gift Card',
    description: 'Treat yourself to anything you want with this gift card.',
    isAvailable: true,
    icon: '/icons/incentives/amazon.png'
  },
  {
    id: 5,
    name: 'Xiaomi Mi Smart Band 6',
    description: 'This smart band will help you track your fitness and health goals.',
    isAvailable: true,
    icon: '/icons/incentives/xiaomi.png'
  }
]

const IncentivesContainer = () => {
  const [ptoIncentives, setPtoIncentive] = React.useState(ptoIncentivesData)
  const [cashIncentive, setCashIncentive] = React.useState(cashIncentivesData)
  const [giftIncentives, setGiftIncentives] = React.useState(giftIncentivesData)

  const handlePTOIncentiveActivation = (incentiveToUpdate: any) => (e: any) => {
    const { checked } = e.target;
    const updatedIncentive = { ...incentiveToUpdate, isAvailable: checked };
    const updatedIncentives = ptoIncentives.map((incentive) => {
      if (incentive.id === updatedIncentive.id) {
        return updatedIncentive;
      }
      return incentive;
    });
    setPtoIncentive(updatedIncentives);
  };

  const handleCashIncentiveActivation = (e: any, incentiveToUpdate: any) => {
    const { checked } = e.target
    const updatedIncentive = { ...incentiveToUpdate, isAvailable: checked }
    const updatedIncentives = cashIncentive.map((incentive) => {
      if (incentive.id === updatedIncentive.id) {
        return updatedIncentive
      }
      return incentive
    }
    )
    setCashIncentive(updatedIncentives)
  }

  const handleGiftIncentiveActivation = (e: any, incentiveToUpdate: any) => {
    const { checked } = e.target
    const updatedIncentive = { ...incentiveToUpdate, isAvailable: checked }
    const updatedIncentives = giftIncentives.map((incentive) => {
      if (incentive.id === updatedIncentive.id) {
        return updatedIncentive
      }
      return incentive
    }
    )
    setGiftIncentives(updatedIncentives)

  }


  const renderPtoIncentives = () => {
    return (
      <>
        <div className='flex justify-between items-center mb-[20px]'>
          <h5 className='text-basic_grey_2 ml-[30px]'>Paid Time Off (PTO)</h5>
          {/* <Button className='' onClick={() => { }} text='Add PTO' isPrimary isSmallBtn icon={icons.addLight} /> */}
        </div>
        <div className='flex gap-4'>
          {ptoIncentives.map((incentive) => {
            return (
              <div key={incentive.name} className='relative flex flex-1 gap-4 w-full lg:w-1/2 h-[152px] rounded-[32px] bg-brand_voilet_hue p-[16px]'>
                <Image src={incentive.icon} width={120} height={120} alt='PTO Incentive' />
                <div className='flex-1'>
                  <h4 className='font-normal mt-[5px]'>{incentive.name}</h4>
                  <div className='flex gap-2 justify-end absolute bottom-5 right-[60px]'>
                    <p>Available</p>
                    <Toggle id={incentive.name} handleIncentiveActivation={handlePTOIncentiveActivation(incentive)} value={incentive.isAvailable} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  const renderCashIncentives = () => {
    return (
      <>
        <div className='flex justify-between items-center mb-[20px]'>
          <h5 className='text-basic_grey_2 ml-[30px]'>Cash Allowances</h5>
          {/* <Button className='' onClick={() => { }} text='Add More' isPrimary isSmallBtn icon={icons.addLight} /> */}
        </div>
        <div className='flex gap-4'>
          {
            cashIncentive.map((incentive) => {
              return (
                <div key={incentive.id} className='relative flex flex-1 gap-4 w-full lg:w-1/2 h-[152px] rounded-[32px] bg-brand_voilet_hue p-[16px]'>
                  <Image src={incentive.icon} width={120} height={120} alt='PTO Incentive' />
                  <div className='flex-1'>
                    <h4 className='font-normal mt-[5px]'>{incentive.name}</h4>
                    <div className='flex gap-2 justify-end absolute bottom-5 right-[60px]'>
                      <p>Available</p>
                      <Toggle id={incentive.name} handleIncentiveActivation={(e) => handleCashIncentiveActivation(e, incentive)} value={incentive.isAvailable} />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }

  const renderGiftIncentives = () => {
    return (
      <div className=''>
        <div className='flex justify-between items-center mb-[20px]'>
          <h5 className='text-basic_grey_2 ml-[30px]'>Gifts</h5>
          {/* <Button className='' onClick={() => { }} text='Add More' isPrimary isSmallBtn icon={icons.addLight} /> */}
        </div>
        <div className='flex flex-col flex-wrap gap-4 bg-brand_voilet_hue rounded-[32px]'>
          {
            giftIncentives.map((incentive) => {
              return (
                <div key={incentive.id} className='relative flex flex-1 gap-4 w-full h-[75px] rounded-[32px] bg-brand_voilet_hue p-[16px]'>
                  <div className='w-[75px] h-[75px] rounded-[18px] bg-basic_white p-[16px]'>
                    <Image src={incentive.icon} width={50} height={50} className='h-auto' alt='PTO Incentive' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-normal mt-[5px] mb-[8px]'>{incentive.name}</h4>
                    <p className='text-small text-basic_grey_1'>{incentive.description}</p>
                    <div className='flex gap-2 justify-end absolute bottom-5 right-[60px]'>
                      <p>Available</p>
                      <Toggle id={incentive.name} handleIncentiveActivation={(e) => handleGiftIncentiveActivation(e, incentive)} value={incentive.isAvailable} />
                    </div>
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
    <div className='w-full'>
      <h2 className='font-normal mb-[20px]'>All Incentives</h2>
      {renderPtoIncentives()}
      <div className='h-[1px] w-full bg-basic_grey_300 my-[20px]'></div>
      {renderCashIncentives()}
      <div className='h-[1px] w-full bg-basic_grey_300 my-[20px]'></div>
      {renderGiftIncentives()}
    </div>
  )
}

export default IncentivesContainer