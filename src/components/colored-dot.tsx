const ColoredDot = ({ className }: { className: string }) => {
  const style = `${className} min-w-[12px] min-h-[12px] rounded-full inline-block`;

  return (
    <span className={style}></span>
  );
}

export default ColoredDot;