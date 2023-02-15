import { Meet } from '@types'
import CollaboListItem from './CollaboListItem'

interface CollaboListProps {
  collaboItems: Meet[]
}

const CollaboList = ({ collaboItems }: CollaboListProps) => {
  return (
    <div className="w-[100%] bg-gray-900 px-[16px] pt-[29px] pb-[49px]">
      {collaboItems.map((collaboItem) => {
        return (
          <CollaboListItem key={collaboItem.id} collaboListItem={collaboItem} />
        )
      })}
    </div>
  )
}

export default CollaboList
