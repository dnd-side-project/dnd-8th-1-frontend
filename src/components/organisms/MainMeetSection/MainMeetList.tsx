import { Meet } from '@types'
import MainMeetListItem from './MainMeetListItem'

interface MainMeetSectionProps {
  meetLists: Omit<Meet, 'deadline'>[]
}

const MainMeetList = ({ meetLists }: MainMeetSectionProps) => {
  return (
    <section className="no-scrollbar mt-[28px] flex overflow-x-scroll">
      {meetLists?.map((meetItem) => (
        <MainMeetListItem key={meetItem.id} meetItem={meetItem} />
      ))}
    </section>
  )
}

export default MainMeetList
