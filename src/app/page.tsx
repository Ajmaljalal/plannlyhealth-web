import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { icons } from "@/lib/icons";
export default function Home() {
  return (
    <>
      <div className="p-8 m-8 flex">
        <Button text='Submit' className="mr-4 w-[268px]" />
        <Button text='Submit' disabled className="mr-4 w-[268px]" />
        <Button text='Submit' outlined className="mr-4 w-[268px]" icon={icons.upload} />
        <Button text='Submit' outlined disabled className="w-[200px]" />
      </div>
      <div className="p-8 m-8 flex">
        <Input name="email" placeholder="example@company.com" label="Work Email" type="email" className="mr-4" required />
        <Input name='password' placeholder="Password" type="password" className="mr-4" icon={icons.upload} />
        <Input name='email ' placeholder="email" disabled className="w-[268px]" label="Email" />
      </div>
    </>
  )
}
