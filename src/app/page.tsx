import { Button } from "@/components/button";
import {icons } from "@/lib/icons";
export default function Home() {
  return (
    <div className="p-8 m-8 flex">
      <Button text='Submit' className="mr-4 w-[268px]"/>
      <Button text='Submit' disabled className="mr-4 w-[268px]"/>
      <Button text='Submit' outlined className="mr-4 w-[268px]" icon={icons.upload} />
      <Button text='Submit' outlined disabled className="w-[200px]"/>
    </div>
  )
}
