import { Center } from '@chakra-ui/react'
import { Spacer } from '@components'
import Image from 'next/image'
import Danverse from '/public/assets/images/danverce.png'

const WelcomeModalContent = () => {
  return (
    <div className="mx-[30px] bg-[#2c2c2c]">
      <Center flexDirection="column">
        <Spacer size={10.3} />
        <span className="text-headline font-bold text-[#FFF]">
          댄버스 가입을 환영합니다!
        </span>
        <Spacer size={11} />
        <Image src={Danverse} alt="댄버스 로고 이미지" width={269} />
        <Spacer size={25.67} />
        <span className="w-fit text-center text-body1 text-[#D4D4D4]">
          프로필을 등록해서 댄서 또는 댄스팀에 대해 <br /> 더 자세하게
          알려주세요!
        </span>
      </Center>
    </div>
  )
}

export default WelcomeModalContent
