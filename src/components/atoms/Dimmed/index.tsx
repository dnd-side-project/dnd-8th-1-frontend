interface DimmedProps {
  handleOnClick?: () => void
  styleClass?: string
}

const Dimmed = ({ handleOnClick, styleClass }: DimmedProps) => {
  return (
    <div
      onClick={handleOnClick}
      className={`fixed z-[999] mx-[auto] w-[375px] ${styleClass}`}
    />
  )
}

export default Dimmed
