

const TabButton = ({ text, count, isActive, onClick }: any) => {
  const bgColor = isActive ? 'bg-brand_dark_blue' : 'bg-basic_white'
  const textColor = isActive ? 'text-basic_white' : 'text-basic_grey_1'
  const style = `${bgColor} ${textColor} flex justify-center items-center h-[32px] w-[155px] rounded-[24px] cursor-pointer text-small`
  const iconStyle = isActive ? 'text-basic_white bg-brand_voilet' : 'text-basic_grey_2'
  return (
    <div className={style} onClick={onClick}>
      {text}
      {count ? <span className={`ml-2 h-[20px] w-[20px] rounded-[50%] bg-basic_grey_4 flex items-center justify-center ${iconStyle}`}>{count}</span> : null}
    </div >
  )
}

export default TabButton