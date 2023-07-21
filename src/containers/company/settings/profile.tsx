import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { icons } from "@/lib/icons"
import Image from "next/image"
import { useState } from "react"

const inputStyle = 'max-w-[340px] min-w-[335px]'


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleProfileSave = () => {
    setIsEditing(false)
  }

  return (
    <div className='max-w-[692px] mt-[56px] flex gap-12 flex-wrap'>
      <div className='flex gap-2 items-center'>
        <h4 className='font-normal'>Personal Info</h4>
        <Image src={icons.editPencil} width={20} height={20} alt='' className='cursor-pointer' onClick={toggleEdit} />
      </div>
      <div className='flex w-full gap-4 flex-wrap'>
        <Input label='First Name' name='first_name' placeholder='First Name' value='Ajmal jalal' className={inputStyle} disabled={!isEditing} />
        <Input label='Last Name' name='last_name' placeholder='Last Name' value={''} className={inputStyle} disabled={!isEditing} />
        <Input label='Email' name='email' placeholder='Email' value={''} className={inputStyle} disabled={!isEditing} />
        <Input label='Phone' name='phone' placeholder='Phone' value={''} className={inputStyle} disabled={!isEditing} />
        <Input label='Job Title' name='job_title' placeholder='Job Title' value={''} className={inputStyle} disabled={!isEditing} />
        <Input label='Address' name='address' placeholder='Address' value={''} className={inputStyle} disabled={!isEditing} />
      </div>
      <div className='flex w-full justify-end mr-[5px]'>
        <Button text='Save' className='mt-[48px] w-[100px] slef-end' disabled={!isEditing} isSmallBtn isPrimary onClick={handleProfileSave} />
      </div>
    </div>
  )
}

export default Profile