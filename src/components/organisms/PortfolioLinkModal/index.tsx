import { Modal } from '@components'
import { Dispatch, SetStateAction } from 'react'
import { Portfolio } from '@types'
import { Center } from '@chakra-ui/react'
import Link from 'next/link'

interface PortfolioLinkModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  // TODO: 일단 없으면 빈 문자열로 가정, 백엔드 확답 필요
  portfolio: Portfolio
}

// TODO: 데이터 필드 관련 백엔드에게 문의 (트위터 x, 틱톡)
// TODO: 필드 비어있는 경우 어떻게 되는지?

const PortfolioLinkModal = ({
  showModal,
  setShowModal,
  portfolio,
}: PortfolioLinkModalProps) => {
  const likeButtonStyle =
    'h-[54px] w-[249px] rounded-[10px] bg-gray-100 text-body2 font-bold text-gray-900'

  return (
    <Modal
      hasCloseButton={true}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className=" flex w-[290px] flex-col rounded-[16px] bg-gray-700 pb-[27px]">
        <Center flexDirection="column">
          <div className="flex items-center justify-center pt-[11px] pb-[27px] text-body1 font-bold leading-none text-gray-100">
            <span>작업물 보기</span>
          </div>

          <div className="flex flex-col gap-[17px]">
            <Link href={portfolio.instagramUrl} target="_blank">
              <button className={likeButtonStyle}>인스타그램</button>
            </Link>

            <Link href={portfolio.youtubeUrl} target="_blank">
              <button className={likeButtonStyle}>유튜브</button>
            </Link>

            <Link href={portfolio.tiktokUrl} target="_blank">
              <button className={likeButtonStyle}>틱톡</button>
            </Link>
          </div>
        </Center>
      </div>
    </Modal>
  )
}

export default PortfolioLinkModal
