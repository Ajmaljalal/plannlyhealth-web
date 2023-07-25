'use client';
import { icons } from "@/lib/icons";
import Image from "next/image";
import { useState } from "react";
import BenefitUtilization from "./benefit-utilization";
import BenefitRecommendations from "./benefit-recommendations";
import BenefitEnrollmentProgress from "./benefit-enrollment";

const tabs = [
  {
    title: 'Assessment Completion',
    count: 80,
    isPercentage: true,
    previous_count: 90

  },
  {
    title: 'Total Life Events',
    count: 941,
    isPercentage: false,
    previous_count: 874
  },
  {
    title: 'Total Special Enrollments',
    count: 344,
    isPercentage: false,
    growth: 15,
    previous_count: 300
  },
  {
    title: 'Benefit Utilization',
    count: 44,
    isPercentage: true,
    previous_count: 39
  }
]

const tabContent: any = {
  'Benefit Utilization': <>
    <BenefitUtilization />
    <BenefitRecommendations />
  </>,
  'Assessment Completion': <></>,
  'Total Life Events': <></>,
  'Total Special Enrollments': <BenefitEnrollmentProgress />


}

const SectionsTab = () => {
  const [activeTab, setActiveTab] = useState('Benefit Utilization');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  }

  const renderTabs = () => {
    return tabs.map((tab, index) => {
      const percentage = tab.isPercentage ? '%' : '';
      const isGrowing = tab.previous_count ? tab.count > tab.previous_count : false;
      let growthPercentage: number = tab.previous_count ? (tab.count - tab.previous_count) / tab.previous_count * 100 : 0;
      growthPercentage = Math.abs(growthPercentage);
      growthPercentage = Math.ceil(growthPercentage);
      const growthText = isGrowing ? `${growthPercentage}%  Increase` : `${growthPercentage}%  Decrease`;
      const growthIcon = isGrowing ? icons.increase : icons.decrease;
      const activeTabClass = activeTab === tab.title ? 'bg-gradient-to-br from-brand_dark_blue to-brand_voilet_lighter text-basic_white' : '';
      const tabItemClass = `h-[154px] flex-1 rounded-[32px] bg-basic_grey_5 text-basic_black px-[32px] py-[24px] cursor-pointer ${activeTabClass}`;

      return (
        <div className={tabItemClass} key={tab.title} onClick={() => handleTabClick(tab.title)}>
          <div className="flex flex-col">
            <h1 className="font-medium mb-[4px]">{tab.count}{percentage}</h1>
            <p className="">{tab.title}</p>
            <p className="font-medium mt-[22px] flex gap-2"><Image src={growthIcon} width={24} height={24} alt="growth icon" />{growthText}</p>
          </div>
        </div>
      )
    })
  }

  const renderTabContent = () => {
    return (
      <div className="flex gap-4 mt-[30px]">
        {tabContent[activeTab]}
      </div>
    )
  }
  return (
    <div className="">
      <div className="flex justify-between gap-4">
        {renderTabs()}
      </div>
      {renderTabContent()}
    </div>
  )
}

export default SectionsTab;