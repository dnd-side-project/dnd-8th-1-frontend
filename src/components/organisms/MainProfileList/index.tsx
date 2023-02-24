import MainProfileItem from './MainProfileItem'
import { ProfileMain } from '@types'

interface MainProfileListProps {
  profileItems: ProfileMain[]
}
const MainProfileList = ({ profileItems }: MainProfileListProps) => {
  return (
    <ul className="no-scrollbar ml-[16px] flex w-[375px] gap-[22px] overflow-scroll">
      {profileItems.map((item) => (
        <MainProfileItem key={item.id} profile={item} />
      ))}
    </ul>
  )
}

export default MainProfileList
