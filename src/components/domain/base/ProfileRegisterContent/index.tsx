import { Center } from '@chakra-ui/react'
import { Spacer } from '@components'

const ProfileRegisterContent = () => {
  return (
    <div className="mx-[16px] bg-[#2c2c2c]">
      <Center flexDirection="column">
        <Spacer size={5.3} />
        <span className="text-headline font-bold text-[#FFF]">
          프로필 등록이 필요해요.
        </span>
        <Spacer size={48} />
        <span className="text-center text-body2 text-gray-400">
          프로필을 등록해야 이용가능한 서비스에요. <br /> 자신 또는 팀에 대해
          소개해볼까요?
        </span>
      </Center>
    </div>
  )
}

export default ProfileRegisterContent
