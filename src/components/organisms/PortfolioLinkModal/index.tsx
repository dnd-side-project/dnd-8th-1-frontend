import { Modal } from '@components'
import { Dispatch, SetStateAction } from 'react'
import { Portfolio } from '@types'
import { Center } from '@chakra-ui/react'
import Link from 'next/link'

interface PortfolioLinkModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  portfolio: Portfolio
}

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
            {portfolio?.instagram && portfolio?.instagram !== '' && (
              <Link href={portfolio?.instagram} target="_blank">
                <button className={likeButtonStyle}>인스타그램</button>
              </Link>
            )}

            {portfolio?.youtube && portfolio?.youtube !== '' && (
              <Link href={portfolio?.youtube} target="_blank">
                <button className={likeButtonStyle}>유튜브</button>
              </Link>
            )}

            {portfolio?.tiktok && portfolio?.tiktok !== '' && (
              <Link href={portfolio?.tiktok} target="_blank">
                <button className={likeButtonStyle}>틱톡</button>
              </Link>
            )}
          </div>
        </Center>
      </div>
    </Modal>
  )
}

export default PortfolioLinkModal
