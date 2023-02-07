interface DimmedProps {
  handlerFn?: () => void
  styleClass?: string
}

const Dimmed = ({ handlerFn, styleClass }: DimmedProps) => {
  return (
    <div
      onClick={handlerFn}
      className={`absolute inset-0 z-[999] bg-black bg-opacity-20 sm:w-[375px] ${styleClass}`}
    />
  )
}

export default Dimmed
