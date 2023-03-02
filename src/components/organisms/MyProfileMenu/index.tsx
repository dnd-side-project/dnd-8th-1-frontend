import Link from 'next/link'
import MyProfileMenuItem from './MyProfileMenuItem'
import dynamic from 'next/dynamic'
import { useDisclosure } from '@hooks'
import { SetStateAction } from 'react'

const CheckboxModal = dynamic(() => import('../../templates/CheckboxModal'), {
  ssr: false,
})

const MyProfileMenu = () => {
  const dividerStyle = 'width-[100%] h-[0.7px] bg-gray-600'
  const [showModal, setShowModal, toggle] = useDisclosure()

  return (
    <div className="relative">
      <ul>
        <div className={dividerStyle} />
        {/* TODO: 전역 로그인 상태 이용 */}
        {/* <Link href={`/profile/${id}/history`}> */}
        <MyProfileMenuItem
          content="활동 내역"
          description="만나기, 공연, 후기 "
        />
        {/* </Link> */}
        <div className={dividerStyle} />
        <MyProfileMenuItem content="탈퇴" handleOnClick={toggle} />
      </ul>
      <button
        className="absolute top-[176px] right-[17px] w-fit text-body1 text-gray-400"
        onClick={() => {
          // TODO: 로그아웃 API 호출하기
          console.log('로그아웃')
        }}
      >
        <span className="underline">로그아웃</span>
      </button>

      <CheckboxModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleOnSubmit={() => {
          // TODO: 탈퇴 API 호출
          console.log('탈퇴')
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
