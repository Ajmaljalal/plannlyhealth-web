import { useRef } from "react";
import { Button } from "./button";

type FileUploadProps = {
  text: string
  acceptedFileTypes: string
  multiple?: boolean
  onChange: (file: any) => void
}

export const FileUpload = ({
  acceptedFileTypes,
  onChange,
  text,
  multiple = false

}: FileUploadProps) => {
  const inputRef: any = useRef(null);
  return (
    <div className='h-[40px] flex'>
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
        isSmallBtn
        className="w-[200px]"
      />
    </div>
  );
}

export default FileUpload