import { calculateWidthTailwindClass } from "@/lib/helpers";

const containerStyle = 'flex flex-col flex-1 h-[285px] rounded-[32px] bg-basic_grey_5 px-[32px] py-[24px]';

const data = [
  {
    name: 'Suicide Hotline',
    percentage: 75,
    color: 'bg-brand_voilet'
  },
  {
    name: 'Mental Health Benefits',
    percentage: 68,
    color: 'bg-basic_black'
  },
  {
    name: 'Employee Assistance Program',
    percentage: 50,
    color: 'bg-basic_yellow'
  }
]
const BenefitRecommendations = () => {


  const renderRecommendations = () => {
    return data.map(recommendation => {
      const width = calculateWidthTailwindClass(recommendation.percentage)
      const graphContainerBgColor = `${recommendation.color}/[0.22]`
      const graphBgColor = `${recommendation.color}`
      const graphWidth = `${width.toString()}`
      const graphContainerStyles = `w-full h-[12px] rounded-[12px] mt-[6px] ${graphContainerBgColor}`
      const graphStyles = `h-[12px] rounded-[10px] ${graphBgColor} ${graphWidth}`
      return (
        <div className="w-full mb-[20px]" key={recommendation.name}>
          <div className="flex w-full justify-between">
            <p>{recommendation.name}</p>
            <p>{recommendation.percentage}%</p>
          </div>
          <div className={graphContainerStyles}>
            <div className={graphStyles} />
          </div>
        </div>
      )

    })
  }


  return (
    <div className={containerStyle}>
      <h3 className="font-medium mb-[30px]">Benefit Recommendations</h3>
      {renderRecommendations()}
    </div>
  );
}

export default BenefitRecommendations;