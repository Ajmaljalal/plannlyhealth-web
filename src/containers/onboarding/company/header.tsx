'use client';
import { currentStepSelector, setStep } from '@/store/company';
import { useDispatch, useSelector } from '@/store/store'

const stepItemGeneralStyles = "flex items-center justify-center px-[16px] h-[40px] py-[8px] text-big rounded-[32px] cursor-pointer";
const stepItemCurrentStyles = "text-basic_white bg-brand_dark_blue";
const stepItemOtherStyles = "text-basic_grey_1 bg-basic_grey_4";

const stepItemNumberStyles = "text-[13px] w-[24px] h-[24px] mr-[10px] rounded-[50%] flex items-center justify-center";
const stepItemNumberCurrentStyles = "text-basic_white bg-brand_voilet_light";
const stepItemNumberOtherStyles = "bg-basic_white";


const onboardingSteps: any = {
  1: {
    title: "Company",
    step: 1,
  },
  // 2: {
  //   title: "Benefits",
  //   step: 2,
  // },
  // 3: {
  //   title: "Integrations",
  //   step: 3,
  // },
  2: {
    title: "Employees",
    step: 2,
  },
}

const OnboardingHeaderStep = ({ step }: { step: number }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector(currentStepSelector);
  const isActiveStep = step === currentStep;

  const onStepChange = (step: number) => {
    dispatch(setStep(step));
  }

  const currentStepItem = (
    <div className={`${stepItemGeneralStyles} ${stepItemCurrentStyles}`} onClick={() => onStepChange(step)}>
      <span className={`${stepItemNumberStyles} ${stepItemNumberCurrentStyles}`}>{step}</span>
      <span>{onboardingSteps[step].title}</span>
    </div>
  )
  const otherStepItem = (
    <div className={`${stepItemGeneralStyles} ${stepItemOtherStyles}`} onClick={() => onStepChange(step)}>
      <span className={`${stepItemNumberStyles} ${stepItemNumberOtherStyles}`}>{step}</span>
      <span>{onboardingSteps[step].title}</span>
    </div>
  )
  return isActiveStep ? currentStepItem : otherStepItem;
}

const HorizontalLine = () => {
  return (
    <div className="w-full h-[3px] bg-basic_grey_4 mx-[24px]"></div>
  );
}

const OnboardingHeader = ({ }) => {
  return (
    <div className="w-full lg:max-w-[1440px] flex justify-between items-center">
      <OnboardingHeaderStep step={1} />
      <HorizontalLine />
      {/* <OnboardingHeaderStep step={2} /> */}
      {/* <HorizontalLine /> */}
      {/* <OnboardingHeaderStep step={3} /> */}
      <HorizontalLine />
      <OnboardingHeaderStep step={2} />
    </div>
  );
}

export default OnboardingHeader;