import { Button } from "@/components/button";
import Hero from "./hero";
import { icons } from "@/lib/icons";

const BenefitsMap = () => {
  return (
    <>
      <Hero image="/illustrations/upload-benefits-illustration.svg" title="Upload your benefit guide" description="Upload a PDF file of your benefits or start adding manually" />
      <div className="flex gap-4">
        <Button className="w-[200px]" text="Upload PDF" isPrimary isSmallBtn />
        <Button className="w-[200px] text-basic_grey_1" text="Add Benefit" isSmallBtn icon={icons.add} />
      </div>
    </>
  );
}

export default BenefitsMap;