import React from 'react'

function ComingSoon() {
  return (
    <div className='my-[32px] flex gap-6 flex-wrap'>
      <div className='w-full h-[300px] py-[40px] rounded-[32px] border-2 flex flex-col items-center justify-center border-basic_grey_4 border-dashed'>
        {/* <Image src={icons.comingSoon} width={180} height={80} alt='coming soon' style={{ height: 'auto' }} /> */}
        <h1 className='text-center font-normal text-basic_grey_3'>Coming soon...</h1>
      </div>
    </div>
  )
}

export default ComingSoon