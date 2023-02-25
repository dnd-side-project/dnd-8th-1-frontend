import { Avatar } from '@components'
import Background_black from '/public/assets/images/Background_black.png'
import Image from 'next/image'
import { Center } from '@chakra-ui/react'

interface ProfileDisabledProps {
  profileImage: string
  name: string
}

const ProfileDisabled = ({ profileImage, name }: ProfileDisabledProps) => {
  return (
    <div className="relative h-[100vh] bg-[#1A1A1A]">
      <Image src={Background_black} alt="프로필 미등록자" />
      <div className="translate-y-[-63px]">
        <Center className="flex-col gap-[10px]">
          <Avatar profileImage={profileImage} size={130} />
          <span className="text-title2 font-bold text-gray-100">{name}</span>
        </Center>
      </div>
    </div>
  )
}

export default ProfileDisabled
