import { Flex } from '@chakra-ui/react'
import { MainProfileList, Spacer } from '@components'
import { ProfileMain } from '@types'

interface MainProfileSectionProps {
  profileItems: ProfileMain[]
}

const MainProfileSection = ({ profileItems }: MainProfileSectionProps) => {
  return (
    <section className="px-[16px]">
      <Flex direction="column">
        <h2 className="text-title2 font-bold leading-none text-blue-light">
          댄버스 프로필
        </h2>
        <Spacer size={22} />
        <h3 className="text-subtitle font-bold leading-none text-gray-100 ">
          댄버스의 다채로운 댄서들 💫
        </h3>
      </Flex>
      <Spacer size={28} />
      <MainProfileList profileItems={profileItems} />
    </section>
  )
}

export default MainProfileSection
