interface DimmedProps {
  handleOnClick?: () => void
  styleClass?: string
}

const Dimmed = ({ handleOnClick, styleClass }: DimmedProps) => {
  return (
    <div
      onClick={handleOnClick}
      className={`fixed z-[998] mx-[auto] w-[375px] bg-[#000000] bg-opacity-60 ${styleClass}`}
    />
  )
}

export default Dimmed
