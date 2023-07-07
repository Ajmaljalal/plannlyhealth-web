

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const styles = `
    bg-basic_white
    text-black
    relative
`

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={`${styles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}