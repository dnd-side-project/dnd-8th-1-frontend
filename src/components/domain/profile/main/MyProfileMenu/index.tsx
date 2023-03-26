import Link from 'next/link'
import MyProfileMenuItem from './MyProfileMenuItem'
import dynamic from 'next/dynamic'
import { useDisclosure } from '@hooks'
import { userAPI } from '@apis'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { userAtom } from 'states'
import { SIGNOUT_USER_STATE } from '@constants'
import { removeAccessToken } from '@utils'

const CheckboxModal = dynamic(
  () => import('../../../../templates/CheckboxModal'),
  {
    ssr: false,
  },
)

const MyProfileMenu = ({ id }: { id: number }) => {
  const dividerStyle = 'width-[100%] h-[0.7px] bg-gray-600'
  const [showModal, setShowModal, toggle] = useDisclosure()
  const router = useRouter()
  const setUser = useSetRecoilState(userAtom)

  return (
    <div className="relative bg-gray-900">
      <ul>
        <div className={dividerStyle} />
        <Link href={`/profile/${id}/history`}>
          <MyProfileMenuItem
            content="활동 내역"
            description="만나기, 공연, 후기 "
          />
        </Link>

        <div className={dividerStyle} />
        <MyProfileMenuItem content="탈퇴" handleOnClick={toggle} />
      </ul>
      <button
        className="absolute top-[176px] right-[17px] w-fit text-body1 text-gray-400"
        onClick={async () => {
          // TODO: 함수로 분리하기
          await userAPI.logout()
          setUser(SIGNOUT_USER_STATE)
          removeAccessToken()
          router.push('/')
        }}
      >
        <span className="underline">로그아웃</span>
      </button>

      <CheckboxModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleOnSubmit={() => {
          userAPI.deleteAccount()
          setUser(SIGNOUT_USER_STATE)
          removeAccessToken()
          router.push('/')
          setShowModal(false)
        }}
        modalContent="정말 탈퇴하시나요?"
        submitMessage="탈퇴하기"
        checkBoxDescription="계정 삭제에 동의합니다."
      />
    </div>
  )
}

export default MyProfileMenu
