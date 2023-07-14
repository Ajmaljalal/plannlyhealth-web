import ScoresBoard from './scores-board';
import SectionsTab from './sections-tab';


const DashboardContainer = () => {

  return (
    <div className="flex flex-col">
      <h2 className='font-normal'>Workforce Insight</h2>
      <ScoresBoard />
      <SectionsTab />
    </div>

  );
}

export default DashboardContainer;