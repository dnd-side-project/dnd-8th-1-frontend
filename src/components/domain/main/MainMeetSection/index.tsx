import { Icon } from '@components'
import { theme } from '@constants'
import { Meet } from '@types'
import Link from 'next/link'
import MainMeetList from './MainMeetList'

interface MainMeetSectionProps {
  meetLists: Omit<Meet, 'deadline'>[]
}

const MainMeetSection = ({ meetLists }: MainMeetSectionProps) => {
  return (
    <section className="px-[16px]">
      {/** 제목 */}
      <div className="mb-[22px] flex items-center">
        <h2
          className={`w-[130px] bg-green_gradient bg-clip-text text-title2 font-bold leading-[28px] text-[transparent]`}
        >
          콜라보 · 쉐어
        </h2>
        <Link href="/meet">
          <Icon icon="arrow-right" size={20} color={theme.colors.gray[600]} />
        </Link>
      </div>
      {/** 설명 */}
      <span className="text-subtitle font-bold text-gray-100">
        댄스로 연결되는 지금!
      </span>
      <p className="mt-[12px] text-body2 text-gray-300">
        함께 댄스를 창작하고, 공유하며 성장해보세요.
      </p>
      {/** 스크롤 리스트 */}
      <MainMeetList meetLists={meetLists} />
      {/** 버튼 */}
      <section className="mt-[40px] mb-[38px] flex justify-center">
        <Link
          href={'/meet'}
          className="flex h-[50px] w-[174px] justify-center rounded-[24.5px] bg-green_gradient px-[1px] py-[1px]"
        >
          <button className="h-full w-full rounded-[24.5px] bg-gray-900">
            <span
              className={`w-[110px] bg-green_gradient bg-clip-text text-body2 text-[transparent]`}
            >
              콜라보 · 쉐어 보러가기
            </span>
          </button>
        </Link>
      </section>
    </section>
  )
}

export default MainMeetSection
