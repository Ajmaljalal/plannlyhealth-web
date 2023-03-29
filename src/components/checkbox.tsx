interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  value: string | number
  currentValue?: string | number
  isChecked?: boolean
}

const wrapperStyles = `
  flex 
  items-center 
  cursor-pointer 
  h-fit
`
const checkboxStyles = `
  w-fit
  h-fit
  cursor-pointer
`

const labelStyles = `
  text-pDark
  font-medium
  cursor-pointer
  pl-[16px]
`

export const CheckBox = ({ label, name, value, currentValue, ...props }: CheckBoxProps) => {
  const isChecked = currentValue === value
  return <div className={wrapperStyles}>
    <input
      type='checkbox'
      name={name}
      id={value.toString()}
      value={value}
      className={checkboxStyles}
      checked={isChecked}
      {...props}
    />
    {label && <label htmlFor={value.toString()} className={labelStyles}>{label}</label>}
  </div>
}