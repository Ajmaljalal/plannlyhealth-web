import ProgressChart from "@/components/progress-chart";
import Tile from "@/components/tile";

const data = [
  {
    title: 'Suicide Hotline',
    percentage: 75,
    color: 'bg-brand_voilet'
  },
  {
    title: 'Mental Health Benefits',
    percentage: 68,
    color: 'bg-basic_black'
  },
  {
    title: 'Employee Assistance Program',
    percentage: 50,
    color: 'bg-basic_yellow'
  }
]
const BenefitRecommendations = () => {


  const renderRecommendations = () => {
    return data.map(recommendation => {
      return <ProgressChart key={recommendation.title} data={recommendation} containerClass='bg-basic_grey_3/[0.22]' graphClass={recommendation.color} />
    })
  }

  return (
    <Tile>
      <h3 className="font-medium mb-[30px]">Benefit Recommendations</h3>
      {renderRecommendations()}
    </Tile>
  );
}

export default BenefitRecommendations;