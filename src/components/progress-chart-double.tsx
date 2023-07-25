import { calculateWidthTailwindClass } from '@/lib/helpers'
import React from 'react'

const ProgressChartDouble = ({ data }: any) => {
  const sortedOptions = data.sort((a: any, b: any) => b.percentage - a.percentage);
  const options: any = {}
  sortedOptions.forEach((item: any, index: any) => {
    options[index] = item
  })



  const renderPortions = () => {
    const firstPortion = options[2]
    const secondPortion = options[1]
    const thirdPortion = options[0]
    const firstPortionWidth = calculateWidthTailwindClass(100).toString()
    const secondPortionWidth = calculateWidthTailwindClass(100 - firstPortion.percentage).toString()
    const thirdPortionWidth = calculateWidthTailwindClass(100 - secondPortion.percentage).toString()
    const firstPortionClass = `h-[128px] rounded-[96px] flex items-center justify-between ${firstPortion.color} ${firstPortionWidth}`
    const secondPortionClass = `h-[128px] rounded-[96px] flex items-center justify-between ${secondPortion.color} ${secondPortionWidth}`
    const thirdPortionClass = `h-[128px] rounded-[96px] flex items-center justify-between ${thirdPortion.color} ${thirdPortionWidth}`


    return (
      <div className={firstPortionClass}>
        <div className={secondPortionClass}>
          <div className={thirdPortionClass}>
            <span />
            <span className='text-basic_white font-medium pr-[16px]'>{thirdPortion.title}  {thirdPortion.percentage}%</span>
          </div>
          <span className='text-basic_white font-medium pr-[16px]'>{secondPortion.title}  {secondPortion.percentage}%</span>
        </div>
        <span className='text-basic_white font-medium pr-[16px]'>{firstPortion.title}  {firstPortion.percentage}%</span>
      </div>
    )
  }

  return renderPortions()

}

export default ProgressChartDouble