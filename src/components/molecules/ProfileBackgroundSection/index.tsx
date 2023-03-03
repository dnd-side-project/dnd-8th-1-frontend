// 댄서와 댄스팀에 따라서

import Background_dancer from '/public/assets/images/Background_dancer.png'
import Background_team from '/public/assets/images/Background_team.png'
import { RecruitmentType } from '@types'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ALIGN_CENTER } from '@constants'

interface ProfileBackgroundSectionProps {
  type: RecruitmentType // 계정 유형에 따라 다르게 렌더링
  id: number // 현재 프로필 유저 아이디
  userId: number | null
}

const ProfileBackgroundSection = ({
  userId,
  type,
  id,
}: ProfileBackgroundSectionProps) => {
  const router = useRouter()

  return (
    <div className="relative w-[375px]">
      <Image
        src={type === '댄서' ? Background_dancer : Background_team}
        alt={'계정 유형'}
      />
      {userId && userId === id && (
        <button
          className={`absolute top-[10px] right-[16px] h-[28px] rounded-[13px] bg-gray-900 px-[16px] py-[8px] text-caption text-gray-100 ${ALIGN_CENTER}`}
          onClick={() => router.push(`/profile/${id}/edit`)}
        >
          <span>프로필 편집</span>
        </button>
      )}
    </div>
  )
}

export default ProfileBackgroundSection
