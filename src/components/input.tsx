'use client'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    className?: string
    disabled?: boolean
    icon?: StaticImageData
    error?: string
    type?: string
    label?: string
    name: string
    required?: boolean
}

const labelBaseStyles = `
    bg-pWhite 
    text-[12px]
    text-bold-700
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
    type,
    icon,
    name,
    error,
    required,
    label,
    disabled,
    onChange,
    ...props
}: InputProps) => {
    const [value, setValue] = useState<string>('')
    const [focused, setFocused] = useState<boolean>(false)
    const [inputError, setError] = useState<string>(error || '')
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange && onChange(e)
    }

    const handleFocus = () => {
        setFocused(true)
    }
    const handleBlur = () => {
        setFocused(false)
        setPasswordVisible(false)
        if (required && !value) {
            setError(`${name} is required`)
        } else {
            setError('')
        }
    }

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    const labelStyles = focused ? labelOnFocusStyles : labelNoFocusStyles
    return (
        <div className={`relative ${className}`} >
            {label && <label
                htmlFor={name}
                className={`${labelBaseStyles} ${labelStyles} ${disabled && labelDisabledStyles}`}
            >
                {label}
            </label>}
            <input
                value={value}
                id={name}
                required={required}
                disabled={disabled}
                type={passwordVisible ? 'text' : type}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{
                    borderColor: inputError ? '#D41F57' : !disabled ? '#807896' : '#EBEAF1'
                }}
                {...props}
            />
            {icon && <Image
                src={icon.src}
                alt='upload'
                width='24'
                height='24'
                className='absolute right-4 top-3 cursor-pointer z-10'
                onClick={handlePasswordVisibility}
            />}
            {inputError && <p className='text-pDarkPink text-[12px] text-bold-700 absolute'>{inputError}</p>}
        </div>
    )
}