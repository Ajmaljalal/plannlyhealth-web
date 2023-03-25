interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  value: string
  currentValue?: string
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

export const CheckBox = ({ label, name, value, currentValue, onChange, ...props }: RadioButtonProps) => {
  const isChecked = currentValue === value

  return <div className={wrapperStyles}>
    <input type='checkbox' name={name} id={value} value={value} className={checkboxStyles} checked={isChecked} {...props} onChange={onChange} />
    {label && <label htmlFor={value} className={labelStyles}>{label}</label>}
  </div>
}