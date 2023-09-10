import ScoreBoard from './score-board';
import SectionsTab from './sections-tab';


const DashboardContainer = () => {

  return (
    <div className="flex flex-col">
      <h2 className='font-normal'>Workforce Risks Insights</h2>
      <ScoreBoard />
      <h2 className='font-normal my-4'>Assessments Participation</h2>
      <SectionsTab />
    </div>

  );
}

export default DashboardContainer;