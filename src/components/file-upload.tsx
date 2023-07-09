import { useRef } from "react";
import { Button } from "./button";

type FileUploadProps = {
  text: string
  acceptedFileTypes: string
  multiple?: boolean
  onChange: (file: any) => void
  isSmallBtn?: boolean
  className?: string
}

export const FileUpload = ({
  acceptedFileTypes,
  onChange,
  text,
  className,
  isSmallBtn = false,
  multiple = false
}: FileUploadProps) => {
  const inputRef: any = useRef(null);
  const height = isSmallBtn ? 'h-[32px]' : 'min-h-[40px]'
  return (
    <div className={`flex ${height}`}>
      <input
        type='file'
        multiple={multiple}
        onChange={(e) => onChange(e.target.files)}
        accept={acceptedFileTypes}
        ref={inputRef}
        style={{ display: 'none' }} />
      <Button
        onClick={() => inputRef.current.click()}
        text={text}
        isPrimary
        className={className}
        isSmallBtn={isSmallBtn}
      />
    </div>
  );
}

export default FileUpload