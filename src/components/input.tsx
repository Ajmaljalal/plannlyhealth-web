'use client'
import { icons } from '@/lib/icons'
import Image, { StaticImageData } from 'next/image'
import { ChangeEvent, useState } from 'react'

// Declare the InputProps interface
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string
  inputClassName?: string
  disabled?: boolean
  icon?: StaticImageData
  error?: string
  type?: string
  label?: string
  name: string
  required?: boolean
  value: string | number
  pattern?: string
}

const baseLabelStyles = 'text-small text-extrabold px-4 text-basic_grey_3'
const disabledLabelStyles = 'text-basic_grey_2'
const onFocusLabelStyles = 'text-pDark'
const onBlurLabelStyles = 'text-pDarkGray'

export const Input = ({
  className,
  inputClassName,
  type = 'text',
  icon,
  name,
  error = '',
  required = false,
  label,
  disabled = false,
  onChange,
  value,
  pattern,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value)
  const [focused, setFocused] = useState(false)
  const [inputError, setInputError] = useState(error)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (onChange) onChange(e)
  }

  const handleInputFocus = () => setFocused(true)

  const handleInputBlur = () => {
    setFocused(false)
    setPasswordVisible(false)
    setInputError(required && !value ? `${label} is required` : '')
    setInputError(value && type === 'email' && !value.toString().includes('@') ? 'Please enter a valid email' : '')
  }

  const handlePasswordVisibility = () => setPasswordVisible(!passwordVisible)

  const labelStyles = `${baseLabelStyles} ${focused ? onFocusLabelStyles : onBlurLabelStyles} ${required ? 'required' : ''} ${disabled ? disabledLabelStyles : ''}`
  const passwordHidSeeIcon = passwordVisible ? icons.hide : icons.see

  return (
    <div className={`relative items-center h-[42px] my-[10px] ${className}`}>
      {label && <label htmlFor={name} className={labelStyles}>{label}</label>}
      <input
        value={inputValue}
        id={name}
        name={name}
        required={required}
        disabled={disabled}
        type={passwordVisible ? 'text' : type}
        pattern={pattern}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        className={inputClassName}
        {...props}
      />
      {(icon || type === 'password') && <Image
        src={type === 'password' ? passwordHidSeeIcon : icon}
        alt='upload'
        width='24'
        height='24'
        className='absolute right-4 top-[37px] cursor-pointer z-10'
        onClick={handlePasswordVisibility}
      />}
      {inputError && <p className='text-pDarkPink text-[10px] text-bold-700 absolute left-1'>{inputError}</p>}
    </div>
  )
}
