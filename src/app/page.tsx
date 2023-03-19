import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { Modal } from "@/components/modal";
import { Select } from "@/components/select";
import { icons } from "@/lib/icons";
export default function Home() {
  return (
    <div className="p-8 m-8 flex justify-center align-center">
      <Container className="w-1/2">
        <h1 className="mb-8">this is a container</h1>
        <div className="mb-12 flex">
          <Button text='Submit' className="mr-4 w-[268px]" />
          <Button text='Submit' disabled className="mr-4 w-[268px]" />
          <Button text='Submit' outlined className="mr-4 w-[268px]" icon={icons.upload} />
          <Button text='Submit' outlined disabled className="w-[200px]" />
        </div>
        <div className="mb-12 flex">
          <Input name="email" placeholder="example@company.com" label="Work Email" type="email" className="mr-4" required />
          <Input name='password' placeholder="Password" type="password" className="mr-4" icon={icons.upload} />
          <Input name='email ' placeholder="email" disabled className="w-[268px]" label="Email" />
        </div>
        <div className="mb-12 flex">
          <Select name='products' placeholder="Select a product" className="mr-4" required options={['One', 'two', 'three', 'four']} />
          <Select name='state' placeholder="Select you state" className="mr-4" options={['One', 'two', 'three', 'four']} />
          <Select name='program' placeholder="Select a product" disabled options={['One', 'two', 'three', 'four']} />
          <Input type="checkbox" name="radio" className="ml-4" />
          <Input type="radio" name="radio" className="ml-4" />
        </div>
        <div className="mb-12 flex">
          <Modal
            triggerButton={<Button text='Open Modal' />}
            ctaButton={<Button text='Submit' className="w-1/2" />}
          >
            <h1>Modal opened</h1>
          </Modal>
        </div>
      </Container>
    </div>
  )
}
