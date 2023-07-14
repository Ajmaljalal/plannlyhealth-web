const ColoredDot = ({ color }: { color: string }) => {
  const style = `bg-${color} min-w-[12px] min-h-[12px] rounded-full inline-block`;

  return (
    <span className={style}></span>
  );
}

export default ColoredDot;