import Image from "next/image";

export const FlatIconButton = ({ icon, text, onClick }: { icon: any, text: string, onClick: () => void }) => {
  return (
    <div onClick={onClick} className="flex justify-center items-center gap-2 h-[32px] cursor-pointer">
      <Image src={icon} width={20} height={20} alt={""} />
      <span className="text-small-bold">{text}</span>
    </div>
  )
}