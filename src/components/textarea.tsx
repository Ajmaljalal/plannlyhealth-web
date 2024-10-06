'use client'
import { StaticImageData } from 'next/image'
import { ChangeEvent, useState } from 'react'
interface InputProps extends React.HTMLAttributes<HTMLTextAreaElement> {
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
}

const labelBaseStyles = `text-small text-extrabold px-4 text-basic_grey_3`

const labelDisabledStyles = `
    text-pLightGray
`

const labelNoFocusStyles = `
    text-pDarkGray
`
const labelOnFocusStyles = `
    text-pDark
`

export const TextArea = ({
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
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string | number>(value)
  const [focused, setFocused] = useState<boolean>(false)
  const [inputError, setError] = useState<string>(error || '')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
    onChange && onChange(e)
  }

  const handleFocus = () => {
    setFocused(true)
  }
  const handleBlur = () => {
    setFocused(false)
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

  const labelStyles = focused ? labelOnFocusStyles : labelNoFocusStyles
  return (
    <div className={`relative ${className}`} >
      {label && <label
        htmlFor={name}
        className={`${labelBaseStyles} ${labelStyles} ${required && 'required'} ${disabled && labelDisabledStyles}`}
      >
        {label}
      </label>}
      <textarea
        value={inputValue}
        id={name}
        name={name}
        required={required}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={inputClassName}
        onChange={handleChange}
        rows={5}
        style={{ height: 'fit-content' }}
        {...props}
      />
      {inputError && <p className='text-pDarkPink text-[10px] text-bold-700 absolute left-1'>{inputError}</p>}
    </div>
  )
}