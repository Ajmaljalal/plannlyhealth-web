// Define an interface for CheckBox properties
interface ICheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional label for the checkbox
  checked: boolean; // Current value of the checkbox
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
export const CheckBox = ({ label, name, checked, ...props }: ICheckBoxProps) => {
  return (
    <div className={wrapperStyle}>
      <input
        type="checkbox"
        name={name}
        id={name}
        className={checkboxStyle}
        checked={checked} // Use checked attribute here
        {...props}
      />
      {label && <label htmlFor={name} className={labelStyle}>{label}</label>}
    </div>
  );
};
