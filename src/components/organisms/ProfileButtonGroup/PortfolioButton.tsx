import { Icon } from '@components'
import { theme, ProfileButtonStyle } from '@constants'

const PortfolioButton = () => {
  return (
    <button
      className={ProfileButtonStyle}
      onClick={() => console.log('모달을 띄운다.')}
    >
      <Icon icon="user-square-mono" color={theme.colors.gray[900]} size={20} />
      <span>작업물 보기</span>
    </button>
  )
}

export default PortfolioButton
