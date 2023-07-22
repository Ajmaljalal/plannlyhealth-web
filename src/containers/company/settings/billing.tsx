import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import Image from "next/image";
import { useState } from "react";
const plansData = [
  {
    title: 'Basic',
    price: 12,
    features: [
      '10 Integrations',
      '20 Team Members',
      'Basic Analytics',
    ],
    current: true
  },
  {
    title: 'Pro',
    price: 24,
    features: [
      '20 Integrations',
      '100+ Team Members',
      'Advanced Analytics',
    ],
    current: false
  }
]

const Billing = () => {
  const [plans, setPlans] = useState<any>(plansData)

  const handlePlanChange = () => {
    const updatedPlans = plans.map((plan: any) => {
      return { ...plan, current: !plan.current }
    })
    setPlans(updatedPlans)
  }
  return (
    <div className='max-w-[1200px] mt-[56px] flex gap-12 flex-wrap'>
      {plans.map((plan: any, index: number) => {
        const activeplanClass = plan.current ? 'bg-gradient-to-br from-brand_dark_blue to-brand_voilet_lighter text-basic_white' : '';
        const planItemClass = `h-[220px] flex-1 max-w-[600px] min-w-[530px] gap-4 rounded-[32px] bg-brand_voilet_hue text-basic_grey_1 px-[32px] py-[24px] cursor-pointer ${activeplanClass}`;
        const titleColor = plan.current ? 'text-basic_grey_3' : 'text-brand_blue_voilet';
        const pricColor = plan.current ? 'text-basic_white' : 'text-brand_blue_voilet';
        const buttonText = plan.current ? 'Current' : 'Change Plan';
        const buttonStyle = plan.current ? 'bg-system_success text-basic_white' : 'bg-brand_voilet_lighter text-brand_dark_blue w-[130px]';
        const buttonIcon = plan.current ? icons.checkWhite : '';

        return (
          <div className={planItemClass} key={index}>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className={`mb-[10px] text-[20px] text-basic_grey_3 ${titleColor}`}>{plan.title}</p>
                <Button text={buttonText} className={buttonStyle} isSmallBtn icon={buttonIcon} onClick={handlePlanChange} />
              </div>
              <h1 className={`font-normal text-[42px] ${pricColor}`}>${plan.price}K
                <span className="text-[13px] ml-[12px]">
                  Per Year
                </span>
              </h1>
              <div className="flex justify-between mt-[30px]">
                {
                  plan.features.map((feature: any, index: any) => {
                    return (
                      <p className="font-medium mt-[22px] flex gap-2" key={index}>
                        <Image src={icons.goldenStar} width={24} height={24} alt="golden star" />
                        {feature}
                      </p>
                    )
                  })
                }
              </div>
            </div>
          </div>
        )
      })}
      <div className='w-full flex flex-col gap-2'>
        <h4 className='font-normal'>Payment Methods</h4>
        <div className="border border-dashed border-brand_voilet/[0.5] rounded-[32px] max-w-[575px] h-[152px] flex flex-col items-center justify-center gap-4">
          <p className="text-basic_grey_3 text-[20px] font-normal mt-[20px]">No payment method added yet</p>
          <Button text='Add Payment Method' className='' isPrimary icon={icons.addLight} disabled />
        </div>
      </div>
    </div>


  )
}

export default Billing