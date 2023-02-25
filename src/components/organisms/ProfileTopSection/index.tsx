import { ProfileBackgroundSection, ProfileInfo } from '@components'
import { GenreTypes, RecruitmentType, RegionTypes } from '@types'

// TODO: 백엔드 명세에 따라 변경될 수 있음
interface ProfileTopSectionProps {
  userId: number
  recruitmentType: RecruitmentType
  imgUrl: string
  name: string
  genres: GenreTypes[]
  location: RegionTypes
  career: string // TODO: 백엔드 명세에 따라 변경될 수 있음
}

const ProfileTopSection = ({
  userId,
  recruitmentType,
  imgUrl,
  name,
  genres,
  location,
  career,
}: ProfileTopSectionProps) => {
  return (
    <section className="relative h-[350.5px] w-[375px] ">
      <ProfileBackgroundSection
        recruitmentType={recruitmentType}
        userId={userId}
      />
      <div className="translate-y-[-63px]">
        <ProfileInfo
          imgUrl={imgUrl}
          name={name}
          genres={genres}
          location={location}
          career={career}
        />
      </div>
    </section>
  )
}

export default ProfileTopSection
