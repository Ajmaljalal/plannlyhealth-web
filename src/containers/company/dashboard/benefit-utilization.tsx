import ColoredDot from "@/components/colored-dot";
import DonutChart from "./benefit-utilization-chart";

const legenStyle = 'flex items-center gap-2 text-small';
const containerStyle = 'flex justify-between flex-1 h-[285px] rounded-[32px] bg-basic_grey_5 px-[32px] py-[24px]';
const BenefitUtilization = () => {
  return (
    <div className={containerStyle}>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium mb-[30px]">Benefit Utilization</h3>
        <p className={legenStyle}>
          <ColoredDot color="system_success" />
          Mental Health Benefits
        </p>
        <p className={legenStyle}>
          <ColoredDot color="basic_black" />
          Employee Assistance Program (EAP)
        </p>
        <p className={legenStyle}>
          <ColoredDot color="basic_orange" />
          Dental Insurance</p>
        <p className={legenStyle}>
          <ColoredDot color="basic_yellow" />
          PTO Benefits</p>
        <p className={legenStyle}>
          <ColoredDot color="brand_voilet" />
          Suicide Hotline
        </p>
      </div>
      <div className="w-[224px] h-[224px]">
        <DonutChart segments={[
          { value: 25, title: 'Mental Health Benefits', color: '#42C76F' },
          { value: 20, title: 'AEP', color: '#160523' },
          { value: 15, title: 'Dental Insurance', color: '#FF9139' },
          { value: 10, title: 'PTO Benefits', color: '#FFB92E' },
          { value: 30, title: 'Suicide Hotline', color: '#5F369D' },
        ]} />
      </div>
    </div>
  );
}

export default BenefitUtilization;