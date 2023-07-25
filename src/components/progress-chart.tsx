import { calculateWidthTailwindClass } from '@/lib/helpers'
import React from 'react'

const ProgressChart = ({ data, containerClass, graphClass }: any) => {
  const width = calculateWidthTailwindClass(data.percentage)
  const graphWidth = `${width.toString()}`
  const graphContainerStyles = `w-full h-[12px] rounded-[12px] mt-[6px] ${containerClass.toString()}`
  const graphStyles = `h-[12px] rounded-[10px] ${graphClass} ${graphWidth}`
  return (
    <div className="w-full mb-[20px]">
      <div className="flex w-full justify-between">
        <p>{data.title}</p>
        <p>{data.percentage}%</p>
      </div>
      <div className={graphContainerStyles}>
        <div className={graphStyles} />
      </div>
    </div>
  )
}

export default ProgressChart