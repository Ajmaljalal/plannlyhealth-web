interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
  currentValue?: string
}

const modalInputWrapperStyles = `
  flex 
  items-center 
  cursor-pointer 
  h-fit
`
const inputStyles = `
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

  return <div className={modalInputWrapperStyles}>
    <input type='radio' name={name} id={value} value={value} className={inputStyles} checked={isChecked} {...props} onChange={onChange} />
    <label htmlFor={value} className={labelStyles}>{label}</label>
  </div>
}