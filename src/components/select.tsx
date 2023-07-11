'use client'
import { ChangeEvent, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { icons } from '@/lib/icons'
interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
    className?: string
    disabled?: boolean
    icon?: StaticImageData
    error?: string
    name: string
    required?: boolean
    options: string[]
    value: string
}

export const Select = ({
    className,
    icon,
    name,
    error,
    required,
    disabled,
    onChange,
    options,
    value,
    ...props
}: SelectProps) => {
    const [selectedValue, setValue] = useState<string>(value)
    const [focused, setFocused] = useState<boolean>(false)
    const [inputError, setError] = useState<string>(error || '')
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
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

    return (
        <div className={`relative ${className}`} >
            <select
                value={selectedValue}
                id={name}
                required={required}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleSelect}
                style={{
                    borderColor: inputError ? '#D41F57' : !disabled ? '#807896' : '#EBEAF1',
                    paddingRight: '45px',
                }}
                {...props}
            >
                <option value=''>{`Select ${name}`}</option>
                {options.map((option, index) => {
                    return <option key={index} value={option}>{option}</option>
                })
                }

            </select>
            <Image
                src={icons.add}
                alt='upload'
                width='24'
                height='24'
                className='absolute right-4 top-3 cursor-pointer z-10 ml-12 pointer-events-none'
                onClick={handlePasswordVisibility}
                style={{
                    opacity: disabled ? 0.4 : 1,
                }}
            />
            {inputError && <p className='text-pDarkPink text-[12px] text-bold-700 absolute'>{inputError}</p>}
        </div>
    )
}