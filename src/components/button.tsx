import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string
    className?: string
}

const styles = `
    bg-blue-500
    hover:bg-blue-700
    text-white
    font-bold
    py-2
    px-4
    rounded
`

export const Button = ({className, text, ...props}: ButtonProps) => {
  return (
      <button
        className={`${styles} ${className}`}
        {...props}
      >
          {text}
      </button>
  )
}
