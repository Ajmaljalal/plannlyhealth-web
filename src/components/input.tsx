'use client'
import Image, { StaticImageData } from 'next/image'
import { ChangeEvent, useState } from 'react'
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

const labelBaseStyles = `
    bg-pWhite 
    text-[12px]
    text-extrabold
    px-2 
    absolute 
    left-4 
    z-10
    -top-[9px] 
`

const labelDisabledStyles = `
    text-pLightGray
`

const labelNoFocusStyles = `
    text-pDarkGray
`
const labelOnFocusStyles = `
    text-pDark
`

export const Input = ({
  className,
  inputClassName,
  type,
  icon,
  name,
  error,
  required,
  label,
  disabled,
  onChange,
  value,
  pattern,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string | number>(value)
  const [focused, setFocused] = useState<boolean>(false)
  const [inputError, setError] = useState<string>(error || '')
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange && onChange(e)
  }

  const handleFocus = () => {
    setFocused(true)
  }
  const handleBlur = () => {
    setFocused(false)
    setPasswordVisible(false)
    if ((required && !value)) {
      setError(`${label} is required`)
      return
    }
    if (value && type === 'email' && !value.toString().includes('@')) {
      setError('Please enter a valid email')
      return
    }
    setError('')
  }

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const labelStyles = focused ? labelOnFocusStyles : labelNoFocusStyles
  return (
    <div className={`relative ${className}`} >
      {label && <label
        htmlFor={name}
        className={`${labelBaseStyles} ${labelStyles} ${required && 'required'} ${disabled && labelDisabledStyles}`}
      >
        {label}
      </label>}
      <input
        value={inputValue}
        id={name}
        name={name}
        required={required}
        disabled={disabled}
        type={passwordVisible ? 'text' : type}
        pattern={pattern}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={inputClassName}
        {...props}
      />
      {icon && <Image
        src={icon}
        alt='upload'
        width='24'
        height='24'
        className='absolute right-4 top-3 cursor-pointer z-10'
        onClick={handlePasswordVisibility}
      />}
      {inputError && <p className='text-pDarkPink text-[10px] text-bold-700 absolute left-1'>{inputError}</p>}
    </div>
  )
}