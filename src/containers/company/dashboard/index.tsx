import ScoreBoard from './score-board';
import SectionsTab from './sections-tab';


const DashboardContainer = () => {

  return (
    <div className="flex flex-col">
      <h2 className='font-normal'>Workforce Insight</h2>
      <ScoreBoard />
      <SectionsTab />
    </div>

  );
}

export default DashboardContainer;