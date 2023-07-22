import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardAddModal } from "./add-card.modal";
import { useDispatch, useSelector } from "@/store/store";
import { companyPaymentMethodSelector, companyPlanSelector, setCompanyPaymentMethod, setCompanyPlan } from "@/store/company";

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
  const currentPlan: any = useSelector(companyPlanSelector)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const paymentMethod: any = useSelector(companyPaymentMethodSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!currentPlan?.title) {
      dispatch(setCompanyPlan(plansData[0]))
    }
  }, [])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handlePlanChange = (plan: any) => {
    const updatedPlan = { ...plan, current: !currentPlan.current }
    dispatch(setCompanyPlan(updatedPlan))

  }

  const deletePaymentMethod = () => {
    dispatch(setCompanyPaymentMethod(null))
  }

  const renderPaymentMethod = () => {
    if (!paymentMethod?.id) {
      return (
        <div className='w-full flex flex-col gap-2'>
          <h4 className='font-normal'>Payment Methods</h4>
          <div className="border border-dashed border-brand_voilet/[0.5] rounded-[32px] max-w-[575px] h-[152px] flex flex-col items-center justify-center gap-4">
            <p className="text-basic_grey_3 text-[20px] font-normal mt-[20px]">No payment method added yet</p>
            <Button text='Add Payment Method' className='' isPrimary icon={icons.addLight} onClick={toggleModal} />
          </div>
        </div>
      )
    } else {
      let lastFourDigits = paymentMethod?.card_number.slice(-4);
      return (
        <div className="flex flex-col w-full gap-2">
          <h4 className='font-normal'>Payment Methods</h4>
          <div className="flex items-center justify-between max-w-[575px] bg-basic_grey_5 h-[52px] px-[24px] rounded-[32px]">
            <p className="text-basic_grey_3 text-big text-brand_dark_blue font-normal">
              **** **** **** {lastFourDigits}
              <span className="py-[6px] px-[12px] rounded-[32px] bg-basic_grey_4 text-small font-bold ml-[20px]">Expiration date {paymentMethod.expiry_date}</span>
            </p>
            <Image src={icons.deleteFlat} width={20} height={20} alt="delete icon" className="cursor-pointer" onClick={deletePaymentMethod} />
          </div>
          <Button text='Change' className='w-[150px] mt-[32px]' isSmallBtn icon={icons.editPencil} onClick={toggleModal} />
        </div>
      )
    }
  }

  return (
    <>
      <div className='max-w-[1200px] mt-[56px] flex gap-12 flex-wrap'>
        {plansData.map((plan: any, index: number) => {
          const isCurrentPlan = plan.title === currentPlan.title;
          console.log('isCurrentPlan', isCurrentPlan)
          const activeplanClass = isCurrentPlan ? 'bg-gradient-to-br from-brand_dark_blue to-brand_voilet_lighter text-basic_white' : '';
          const planItemClass = `h-[220px] flex-1 max-w-[600px] min-w-[530px] gap-4 rounded-[32px] bg-brand_voilet_hue text-basic_grey_1 px-[32px] py-[24px] cursor-pointer ${activeplanClass}`;
          const titleColor = isCurrentPlan ? 'text-basic_grey_3' : 'text-brand_blue_voilet';
          const pricColor = isCurrentPlan ? 'text-basic_white' : 'text-brand_blue_voilet';
          const buttonText = isCurrentPlan ? 'Current' : 'Select Plan';
          const buttonStyle = isCurrentPlan ? 'bg-system_success text-basic_white' : 'bg-brand_voilet_lighter text-brand_dark_blue w-[130px]';
          const buttonIcon = isCurrentPlan ? icons.checkWhite : '';

          return (
            <div className={planItemClass} key={index}>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className={`mb-[10px] text-[20px] text-basic_grey_3 ${titleColor}`}>{plan.title}</p>
                  <Button text={buttonText} className={buttonStyle} isSmallBtn icon={buttonIcon} onClick={() => handlePlanChange(plan)} />
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
        {renderPaymentMethod()}
      </div>
      <CardAddModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  )
}

export default Billing