

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const styles = `
    p-[24px]
    bg-pWhite
    rounded-[16px]
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