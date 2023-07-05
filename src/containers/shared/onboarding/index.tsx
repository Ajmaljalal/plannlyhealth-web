import OnboardingHeader from "./header";
import CompanyDetails from "./company-details";
import BenefitsMap from "./benefits-map";

const Oboarding = () => {
  return (
    <>
      <OnboardingHeader />
      <div className="my-auto">
        {/* <CompanyDetails /> */}
        <BenefitsMap />
      </div>
    </>
  );
}

export default Oboarding;


