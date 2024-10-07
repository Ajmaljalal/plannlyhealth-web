import { Question } from '@/lib/types/assessments'
import Image from 'next/image'

type OptionProps = {
  currentQuestion: Question
  option: string
  index: number
  handleUpdateQuestion: (option: string) => void
}


export const Option = ({ currentQuestion, option, index, handleUpdateQuestion }: OptionProps) => {
  const icon = currentQuestion?.icons ? currentQuestion?.icons[option] : null
  const iconItem = icon ? <Image src={icon} width={24} height={24} alt='icon' /> : <h3 className='text-brand_voilet_light'>{index + 1}</h3>
  const isSelected = currentQuestion?.selected_option === option
  const selectedItemClass = isSelected ? 'bg-basic_white border border-brand_voilet border-2' : ''
  const style = `gap-6 flex lg:flex-col items-center lg:justify-center flex-1 px-[14px] py-[12px] bg-basic_grey_4 rounded-[32px] min-w-[320px] max-w-[350px] lg:max-w-[200px] lg:min-w-[200px] h-[100px] lg:h-[210px] cursor-pointer ${selectedItemClass}`
  return (
    <div key={index} onClick={() => handleUpdateQuestion(option)} className={style}>
      <div className='flex items-center justify-center gap-2 min-w-[65px] min-h-[65px] bg-basic_white shadow-md border border-basic_grey_4/[0.25] rounded-full'>
        {iconItem}
      </div>
      <p className='text-[16px] text-brand_blue_voilet lg:text-center'>{option}</p>
    </div>
  )
}