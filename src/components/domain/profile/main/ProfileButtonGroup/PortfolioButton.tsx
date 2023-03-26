import { Icon } from '@components'
import { theme, ProfileButtonStyle } from '@constants'
import { useDisclosure } from '@hooks'
import { Portfolio } from '@types'

import dynamic from 'next/dynamic'

const PortfolioLinkModal = dynamic(() => import('../PortfolioLinkModal'), {
  ssr: false,
})

const PortfolioButton = ({ portfolio }: { portfolio: Portfolio }) => {
  const [showModal, setShowModal, handleToggle] = useDisclosure()

  return (
    <>
      <button className={ProfileButtonStyle} onClick={handleToggle}>
        <Icon
          icon="user-square-mono"
          color={theme.colors.gray[900]}
          size={20}
        />
        <span>작업물 보기</span>
      </button>

      <PortfolioLinkModal
        showModal={showModal}
        setShowModal={setShowModal}
        portfolio={portfolio}
      />
    </>
  )
}

export default PortfolioButton
