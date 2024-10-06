import React from 'react'

const Toggle = ({ handleIncentiveActivation, value, id }: { handleIncentiveActivation: (e: any) => void, value: boolean, id: string }) => {
  return (
    <div className="relative">
      <input type="checkbox" id={`toggle-${id}`} className="toggle-checkbox hidden" onChange={handleIncentiveActivation} checked={value} />
      <label htmlFor={`toggle-${id}`} className="toggle-label block w-11 h-6 rounded-full bg-basic_grey_400 cursor-pointer"></label>
      <label htmlFor={`toggle-${id}`} className="toggle-dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></label>
    </div>
  )
}

export default Toggle