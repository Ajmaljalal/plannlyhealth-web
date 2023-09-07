import ProgressChart from "@/components/progress-chart";
import Tile from "@/components/tile";

const data = [
  {
    title: 'Emergency Department',
    percentage: 75,
    color: 'bg-brand_voilet'
  },
  {
    title: 'Surgical Services',
    percentage: 68,
    color: 'bg-basic_black'
  },
  {
    title: 'ICU Department',
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
      <h3 className="font-medium mb-[30px]">By Departments</h3>
      {renderRecommendations()}
    </Tile>
  );
}

export default BenefitRecommendations;