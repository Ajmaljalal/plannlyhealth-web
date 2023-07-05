// Define an interface for CheckBox properties
interface ICheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional label for the checkbox
  value: string | number; // Value of the checkbox
  currentValue?: string | number; // Current value of the checkbox
  isChecked?: boolean; // State of the checkbox
}

// Style for the checkbox wrapper
const wrapperStyle = `
  flex 
  items-center 
  cursor-pointer 
  h-fit
`;

// Style for the checkbox
const checkboxStyle = `
  w-fit
  h-fit
  cursor-pointer
  ml-[5px]
`;

// Style for the label
const labelStyle = `
  text-basic_grey_1
  font-medium
  cursor-pointer
  pl-[12px]
`;

// Define CheckBox Component
export const CheckBox = ({ label, name, value, currentValue, ...props }: ICheckBoxProps) => {
  const isChecked = currentValue === value; // Check if checkbox is checked
  return (
    <div className={wrapperStyle}>
      <input
        type="checkbox"
        name={name}
        id={value.toString()}
        value={value}
        className={checkboxStyle}
        checked={isChecked}
        {...props}
      />
      {label && <label htmlFor={value.toString()} className={labelStyle}>{label}</label>}
    </div>
  );
};
