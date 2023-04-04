import { Button } from "./button"

export const LoadingButton = ({ isLoading, text, className }: { isLoading: boolean, text: string, className?: string }) => {
  return (
    <Button
      text={text}
      className={className}
      disabled={isLoading}
    >
      {isLoading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-pWhite mr-10"></div> : null}
    </Button>
  )
}