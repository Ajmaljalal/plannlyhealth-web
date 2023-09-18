// Imports
import { companyDetailsSelector, currentStepSelector, setStep } from '@/store/company';
import { useDispatch, useSelector } from '@/store/store';
import Image from 'next/image';

const stepStyles = {
  general: "flex items-center justify-center px-[16px] h-[40px] py-[8px] text-big rounded-[32px] cursor-pointer",
  current: "text-basic_white bg-brand_dark_blue",
  other: "text-basic_grey_1 bg-basic_grey_4",
  number: {
    general: "text-[13px] w-[24px] h-[24px] mr-[10px] rounded-[50%] flex items-center justify-center",
    current: "text-brand_dark_blue bg-basic_white",
    other: "bg-basic_white"
  }
};

const onboardingSteps: any = {
  1: { title: "Company", step: 1 },
  2: { title: "Employees", step: 2 },
};

const OnboardingHeaderStep = ({ step, isCompleted }: { step: number, isCompleted?: boolean }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector(currentStepSelector);
  const isActiveStep = step === currentStep;

  const onStepChange = (step: number) => {
    dispatch(setStep(step));
  };

  const stepClass = isActiveStep ? stepStyles.current : stepStyles.other;
  const numberClass = isActiveStep ? stepStyles.number.current : stepStyles.number.other;

  const icon = isCompleted ? <Image src="/icons/shared/check-circle-green.svg" width={24} height={24} alt="check" /> : step;

  return (
    <div className={`${stepStyles.general} ${stepClass}`} onClick={() => onStepChange(step)}>
      <span className={`${stepStyles.number.general} ${numberClass}`}>
        {icon}
      </span>
      <span>{onboardingSteps[step].title}</span>
    </div>
  );
};

const HorizontalLine = () => (
  <div className="w-full h-[3px] bg-basic_grey_4 mx-[24px]"></div>
);

const OnboardingHeader = () => {
  const company = useSelector(companyDetailsSelector);
  const isCompanyComplete = company &&
    Object.entries(company)
      .filter(([key]) => key !== 'restrict_signup_to_domain_only')
      .every(([, value]) => value);

  return (
    <div className="w-full lg:max-w-[1440px] flex items-center px-[6px]">
      <OnboardingHeaderStep step={1} isCompleted={isCompanyComplete} />
      <HorizontalLine />
      <OnboardingHeaderStep step={2} />
    </div>
  );
};

export default OnboardingHeader;
