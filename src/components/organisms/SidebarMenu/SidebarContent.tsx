import { useRouter, usePathname } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'
import SidebarContentItem from './SidebarContentItem'

interface SidebarContentProps {
  handleOnClick: () => void
}

const CONTENTS_ITEMS = [
  {
    title: '홈',
    path: '/',
  },
  {
    title: '콜라보 · 쉐어',
    path: '/meet',
  },
  {
    title: '공연 정보',
    path: '/performance',
  },
]

const SidebarContent = ({ handleOnClick }: SidebarContentProps) => {
  const router = useRouter()
  const pathName = usePathname() as string

  const userState = useRecoilValue(userAtom)
  const { id } = userState

  return (
    <ul className="py-[16px] px-[20px]">
      {CONTENTS_ITEMS.map(({ title, path }) => {
        const isCurrentPath =
          title === '홈' ? pathName === path : pathName.includes(path)

        return (
          <SidebarContentItem
            key={title}
            handleOnClick={() => {
              router.push(path)
              handleOnClick()
            }}
            content={title}
            isCurrentPath={isCurrentPath}
          />
        )
      })}

      {!!id && (
        <SidebarContentItem
          handleOnClick={() => {
            router.push(`/profile/${id}`)
            handleOnClick()
          }}
          content="내 프로필"
          isCurrentPath={pathName.includes(`/profile/${id}`)}
        />
      )}
    </ul>
  )
}

export default SidebarContent
