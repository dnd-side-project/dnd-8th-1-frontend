import { Icon } from '@components'
import { theme } from '@constants'
import { MainComment, Performance } from '@types'
import Link from 'next/link'
import MainPerformanceCommentList from './MainPerformanceCommentList'
import MainPerformanceList from './MainPerformanceList'

interface MainMeetSectionProps {
  performanceList: Omit<Performance, 'performStartDate'>[]
  commentList: MainComment[]
}

const MainMeetSection = ({
  performanceList,
  commentList,
}: MainMeetSectionProps) => {
  return (
    <section className="px-[16px]">
      {/** 공연 정보 제목 */}
      <div className="mb-[22px] flex items-center">
        <h2
          className={`mr-[6px] bg-violet-light bg-clip-text text-title2 font-bold leading-[28px] text-[transparent]`}
        >
          공연
        </h2>
        <Link href="/meet">
          <Icon icon="arrow-right" size={20} color={theme.colors.gray[600]} />
        </Link>
      </div>

      {/** 공연 정보 설명 */}
      <h3 className="text-subtitle font-bold text-gray-100">
        취향저격 댄스 공연을 찾아요 👀
      </h3>
      <p className="mt-[12px] text-body2 text-gray-300">
        지역, 장르에 따라 나에게 딱 맞는 공연을 발견해요.
      </p>

      {/** 공연 정보 스크롤 리스트 */}
      <MainPerformanceList performanceList={performanceList} />

      {/** 공연 이동 배너 */}
      <Link
        href={'/performance'}
        className="mt-[42px] mb-[38px] flex h-[80px] w-[343px] items-center justify-between rounded-[10px] bg-[url('/assets/images/main_location.png')] bg-cover bg-center px-[16px] py-[16px] text-body1 font-bold text-gray-100"
      >
        <span>
          이번 달 우리 지역에서 <br /> 열리는 공연은?
        </span>
        <Icon icon="arrow-right" size={24} color={theme.colors.gray[100]} />
      </Link>

      {/** 후기 section */}
      <h3 className="text-subtitle font-bold text-gray-100">
        따듯한 응원과 <br /> 피드백으로 함께 성장해요😀
      </h3>

      {/** 후기 관련 스크롤 리스트 */}
      <MainPerformanceCommentList commentList={commentList} />

      {/** 버튼 */}
      <div className="mt-[40px] mb-[38px] flex justify-center">
        <Link
          href={'/performance'}
          className="flex h-[50px] w-[174px] justify-center rounded-[24.5px] bg-violent_gradient px-[1px] py-[1px]"
        >
          <button className="h-full w-full rounded-[24.5px] bg-gray-900">
            <span
              className={`w-[110px] bg-violent_gradient bg-clip-text text-body2 text-[transparent]`}
            >
              공연 보러가기
            </span>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default MainMeetSection
