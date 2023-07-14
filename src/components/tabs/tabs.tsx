import TabButton from "./tab-button";

type TabProps = {
  text: string,
  count: number,
  isActive: boolean,
  onClick: () => void
};

type TabsProps = {
  tabs: TabProps[]
};


const Tabs = ({ tabs }: TabsProps) => {
  return (
    <div className="flex justify-center items-center min-h-[40px] max-h-[40px] border border-2 border-basic_grey_10 bg-basic_white rounded-[24px] w-fit px-[2px]">
      {
        tabs.map((tab) => {
          return <TabButton key={tab.text} text={tab.text} count={tab.count} isActive={tab.isActive} onClick={tab.onClick} />
        })
      }
    </div>
  );
}

export default Tabs;