import { useState } from "react"
import BenefitCard from "./benefit-card"
import TabButton from "@/components/tab-button"
import { Button } from "@/components/button"
import { useDispatch, useSelector } from "@/store/store"
import { benefitsSelector, setStep } from "@/store/company"



const Integrations = () => {
  const dispatch = useDispatch()
  const allBenefits = useSelector(benefitsSelector)
  const primaryBenefits = allBenefits.filter((benefit: any) => {
    return benefit.isPrimary && benefit.isActive
  })
  const voluntaryBenefits = allBenefits.filter((benefit: any) => {
    return !benefit.isPrimary && benefit.isActive
  })

  const [activeTab, setActiveTab] = useState<any>('primary')

  const benefits = activeTab === 'primary' ? primaryBenefits : voluntaryBenefits
  const renderIntegrations = () => {
    return (
      <div className="flex flex-col items-strech gap-4 w-full pt-[50px]">
        <h2>Add Integrations to Chosen Benefits</h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center min-h-[40px] max-h-[40px] border border-2 border-basic_grey_10 bg-basic_white rounded-[24px] w-[320px]">
            <TabButton text="Primary" count={primaryBenefits.length} isActive={activeTab === 'primary'} onClick={() => setActiveTab('primary')} />
            <TabButton text="Voluntry" count={voluntaryBenefits.length} isActive={activeTab === 'voluntry'} onClick={() => setActiveTab('voluntry')} />
          </div>
        </div>
        <div className="mt-[32px] pb-[300px] flex flex-wrap justify-between max-w-[1440px] overflow-x-scroll">
          {
            benefits.map((benefit: any) => {
              return <BenefitCard key={benefit.title} benefit={benefit} />
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col justify-between items-end w-full h-full relative overflow-hidden">
      {renderIntegrations()}
      <div className="absolute bottom-0 bg-basic_grey_5 w-full h-[100px] flex justify-end gap-4">
        <Button className="w-[200px] max-h-[40px]" text="Skip" onClick={() => dispatch(setStep(4))} />
        {
          benefits?.length && <Button className="w-[200px] max-h-[40px]" isPrimary text="Continue" onClick={() => dispatch(setStep(4))} />
        }
      </div>
    </div>
  );
}

export default Integrations;