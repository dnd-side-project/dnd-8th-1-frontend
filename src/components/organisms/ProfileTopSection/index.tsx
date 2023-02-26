import { ProfileBackgroundSection, ProfileInfo } from '@components'
import { GenreTypes, RecruitmentType, RegionTypes } from '@types'

interface ProfileTopSectionProps {
  id: number
  type: RecruitmentType
  imgUrl: string
  name: string
  genres: GenreTypes[]
  location: RegionTypes
  startDate: string
}

const ProfileTopSection = ({
  id,
  type,
  imgUrl,
  name,
  genres,
  location,
  startDate,
}: ProfileTopSectionProps) => {
  return (
    <section className="relative h-[350.5px] w-[375px] ">
      <ProfileBackgroundSection type={type} id={id} />
      <div className="translate-y-[-63px]">
        <ProfileInfo
          imgUrl={imgUrl}
          name={name}
          genres={genres}
          location={location}
          startDate={startDate}
        />
      </div>
    </section>
  )
}

export default ProfileTopSection
