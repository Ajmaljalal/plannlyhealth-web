import ColoredDot from "@/components/colored-dot";
import DonutChart from "@/components/donut-chart";

const legenStyle = 'flex items-center gap-2 text-small';
const containerStyle = 'min-w-[500px] flex justify-between flex-1 h-[285px] rounded-[32px] bg-basic_grey_5 px-[32px] py-[24px]';
const BenefitUtilization = () => {
  return (
    <div className={containerStyle}>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium mb-[30px]">By Job Functions</h3>
        <p className={legenStyle}>
          <ColoredDot className="bg-system_success" />
          Physicians - 25%
        </p>
        <p className={legenStyle}>
          <ColoredDot className="bg-basic_black" />
          Registered Nurses - 20%
        </p>
        <p className={legenStyle}>
          <ColoredDot className="bg-basic_orange" />
          Technicians - 15%
        </p>
        <p className={legenStyle}>
          <ColoredDot className="bg-basic_yellow" />
          Support Staff - 10%
        </p>
        <p className={legenStyle}>
          <ColoredDot className="bg-brand_voilet" />
          Others - 30%
        </p>
      </div>
      <div className="w-[224px] h-[224px]">
        <DonutChart segments={[
          {
            value: 25, title: 'Physicians', color: '#42C76F'
          },
          { value: 20, title: 'Registered Nurses', color: '#160523' },
          { value: 15, title: 'Technicians', color: '#FF9139' },
          { value: 10, title: 'Support Staff', color: '#FFB92E' },
          { value: 30, title: 'Others', color: '#5F369D' },
        ]} />
      </div>
    </div>
  );
}

export default BenefitUtilization;