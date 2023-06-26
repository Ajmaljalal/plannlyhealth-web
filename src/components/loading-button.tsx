import { StaticImageData } from "next/image"
import { Button } from "./button"

export const LoadingButton = ({ isLoading, text, className, icon }: { isLoading: boolean, text: string, className?: string, icon?: StaticImageData }) => {
  return (
    <Button
      text={text}
      className={className}
      disabled={isLoading}
      icon={icon}
    >
      {isLoading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-pWhite mr-10"></div> : null}
    </Button>
  )
}