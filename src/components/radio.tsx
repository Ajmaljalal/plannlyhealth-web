interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
  currentValue?: string
}

const wrapperStyles = `
  flex 
  items-center 
  cursor-pointer 
  h-fit
`
const radioStyles = `
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

export const RadioButton = ({ label, name, value, currentValue, onChange, ...props }: RadioButtonProps) => {
  const isChecked = currentValue === value

  return <div className={wrapperStyles}>
    <input type='radio' name={name} id={value} value={value} className={radioStyles} checked={isChecked} {...props} onChange={onChange} />
    <label htmlFor={value} className={labelStyles}>{label}</label>
  </div>
}