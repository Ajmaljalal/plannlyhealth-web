import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { icons } from "@/lib/icons"
import { useSelector } from "@/store/store"
import { userProfileSelector } from "@/store/user"
import Image from "next/image"
import { useEffect, useState } from "react"

const inputStyle = 'max-w-[340px] min-w-[335px]'


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const user = useSelector(userProfileSelector)
  const [userData, setUserData] = useState(user)


  useEffect(() => {
    if (!user) return
    if (!userData) {
      setUserData(user)

    }
  }, [user])

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
        <Input label='First Name' name='first_name' placeholder='First Name' value={userData?.first_name} className={inputStyle} disabled={!isEditing} />
        <Input label='Last Name' name='last_name' placeholder='Last Name' value={userData?.last_name} className={inputStyle} disabled={!isEditing} />
        <Input label='Email' name='email' placeholder='Email' value={userData?.email} className={inputStyle} disabled={!isEditing} />
        <Input label='Phone' name='phone' placeholder='Phone' value={userData?.phone} className={inputStyle} disabled={!isEditing} />
        <Input label='Job Title' name='job_title' placeholder='Job Title' value={userData?.job_title} className={inputStyle} disabled={!isEditing} />
        <Input label='Address' name='address' placeholder='Address' value={userData?.address} className={inputStyle} disabled={!isEditing} />
      </div>
      <div className='flex w-full justify-end mr-[5px]'>
        <Button text='Save' className='mt-[48px] w-[100px] slef-end' disabled={!isEditing} isSmallBtn isPrimary onClick={handleProfileSave} />
      </div>
    </div>
  )
}

export default Profile