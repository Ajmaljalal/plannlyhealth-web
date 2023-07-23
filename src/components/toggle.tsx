import React from 'react'

export default function Toggle({ handleIncentiveActivation, value }: { handleIncentiveActivation: (e: any) => void, value: boolean }) {
  return (
    <div className="relative">
      <input type="checkbox" id="toggle" className="toggle-checkbox hidden" onChange={handleIncentiveActivation} checked={value} />
      <label htmlFor="toggle" className="toggle-label block w-11 h-6 rounded-full bg-basic_grey_400 cursor-pointer"></label>
      <label htmlFor="toggle" className="toggle-dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></label>
    </div>
  )
}