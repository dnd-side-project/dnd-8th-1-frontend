import { Avatar, Spacer } from '@components'
import Background_black from '/public/assets/images/Background_black.png'
import Image from 'next/image'
import { Center } from '@chakra-ui/react'
import { useRouter } from 'next/router'
interface ProfileDisabledProps {
  profileImage: string
  name: string
  // TODO: 해당 프로필의 아이디와 자신의 아이디를 비교해서 자신의 아이디면 프로필 등록하기 버튼 렌더링
  id: number
  userId: number
}

const ProfileDisabled = ({
  userId,
  profileImage,
  name,
  id,
}: ProfileDisabledProps) => {
  const router = useRouter()

  return (
    <div className={`relative text-gray-900 ${userId === id && 'h-[390px]'}`}>
      <Image src={Background_black} alt="프로필 미등록자" />
      <div className="translate-y-[-63px]">
        <Center className="flex-col">
          <Avatar profileImage={profileImage} size={130} />
          <Spacer size={6.5} />
          <span className="text-title2 font-bold text-gray-100">{name}</span>
          {/* // TODO: 해당 프로필의 아이디와 자신의 아이디를 비교해서 자신의 아이디면 프로필 등록하기 버튼 렌더링 */}
          <Spacer size={26.5} />
          {userId === id && (
            <button
              className="h-[50px] w-[343px] rounded-[10px] bg-green-light px-[16px] text-body1 font-bold text-gray-900"
              onClick={() => router.push(`/profile/${id}/edit`)}
            >
              프로필 등록하기
            </button>
          )}
        </Center>
      </div>
    </div>
  )
}

export default ProfileDisabled
