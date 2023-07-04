'use client'
import { Button } from '@/components/button'
import { CheckBox } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { Input } from '@/components/input'
import { TextArea } from '@/components/textarea'
import { icons } from '@/lib/icons'
import Image from 'next/image'
import React, { useState } from 'react'

interface SettingsProps {
  company?: any
}

const fileInputStyles = `
    flex
    gap-4
    items-center
    justify-center
    cursor-pointer
  `
const logoPlaceholderStyles = `
    w-[48px]
    h-[48px]
    rounded-full
    flex
    bg-pBackground
    items-center
    justify-center
  `

const logoStyles = `
    w-[48px]
    h-[48px]
    rounded-full
    flex
    
`

export const Settings = ({ company }: SettingsProps) => {
  const [companyData, setCompanyData] = useState<any>(
    {
      name: company?.name || '',
      size: company?.size || '',
      website: company?.website || '',
      address: company?.address || '',
      wellnessAdminEmail: company?.wellnessAdminEmail || '',
      limited: company?.limited || 0,
      mission: company?.mission || '',
      logo: company?.logo || '',
      limitedDomainName: company?.limitedDomainName || ''
    },
  )

  const handleChange = (e: any) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (companyData.limited) {
      setCompanyData({ ...companyData, limited: false })
    } else {
      setCompanyData({ ...companyData, limited: true })
    }
  }

  const handleSave = () => {
    console.log(companyData)
  }

  const handleUpload = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setCompanyData({ ...companyData, logo: reader.result })
    }
  }

  const renderImageUpload = () => {
    const { logo } = companyData
    const size = logo ? '48' : '24'
    return (
      <div className='flex text-pPink font-bold'>
        <label className={fileInputStyles} htmlFor='logo-upload' >
          <span className={companyData.logo ? logoStyles : logoPlaceholderStyles}>
            <Image
              src={companyData.logo ? companyData.logo : icons.uploadImage}
              alt='upload logo'
              width={size}
              height={size}
              className='rounded-[50%] object-cover'
            />
          </span>
          <p>Upload company logo</p>
          <input
            id="logo-upload"
            type='file'
            accept='.png, .jpg, .jpeg, .svg'
            className='hidden'
            onChange={handleUpload}
          />
        </label>
      </div >
    )
  }


  const isButtonDisabled = companyData.name === '' || companyData.size === '' || (companyData.limited && companyData.limitedDomainName === '')


  return (
    <>
      {renderImageUpload()}
      <Divider />
      <div className='flex gap-6 justify-between'>
        <div className='flex  flex-col gap-7 w-1/2'>
          <div className='flex gap-3'>
            <Input
              name='name'
              label='Company Name'
              value={companyData.name}
              required
              className='flex-1'
              onChange={handleChange}
            />
            <Input
              name='size'
              label='Company Size'
              value={companyData.size}
              type='number'
              required
              className='flex-1'
              onChange={handleChange}
            />
          </div>
          <Input
            name='website'
            label='Website'
            value={companyData.website}
            onChange={handleChange}
          />
          <Input
            name='address'
            label='Address'
            type='address'
            value={companyData.address}
            onChange={handleChange}
          />
          <Input
            name='wellnessAdminEmail'
            label='Wellness Admin Email'
            type='email'
            value={companyData.wellnessAdminEmail}
            onChange={handleChange}
          />
          <CheckBox
            name='limited'
            label='Limit sign-up to only the User with the domain:'
            value={1}
            onChange={handleCheckboxChange}
            currentValue={companyData.limited ? 1 : 0}
          />
          {
            companyData.limited ?
              <Input
                name='limitedDomainName'
                label='Domain Name'
                value={companyData.limitedDomainName}
                onChange={handleChange}
                required
              /> : null
          }
        </div>
        <TextArea
          name='mission'
          label='Company Mission Statement'
          value={companyData.mission}
          className='w-1/2 h-[200px]'
          inputClassName='h-full pt-4 resize-none'
          onChange={handleChange}
        />
      </div>
      <Divider />
      <Button text='Save' className='w-[260px]' onClick={handleSave} disabled={isButtonDisabled} />
    </>
  )
}
