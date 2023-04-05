import { MEET_TYPE } from '@constants'

interface MeetPopupContentProps {
  handleOnClick: (meetType: string) => void
}

const MeetPopupContent = ({ handleOnClick }: MeetPopupContentProps) => {
  return (
    <ul className=" flex h-[94px] w-[90px] flex-col gap-[9px] rounded-[8px] border-[1px]  border-gray-600 bg-gray-700 px-[6px] py-[6px]">
      {MEET_TYPE.map((type) => (
        <li
          key={type}
          className="flex h-[36px] w-[78px] cursor-pointer items-center justify-center rounded-[4px] text-center text-body2 text-gray-400 hover:bg-gray-600 hover:font-bold hover:text-green-light"
          onClick={() => handleOnClick(type)}
        >
          <span>{type}</span>
        </li>
      ))}
    </ul>
  )
}

export default MeetPopupContent
