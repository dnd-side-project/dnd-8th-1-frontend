import { ProfileMain } from '@types'
import { Avatar, Spacer } from '@components'
import { Center } from '@chakra-ui/react'
import Link from 'next/link'
import { TEXT_OVERFLOW_STYLE, ALIGN_CENTER } from '@constants'

type MainProfileItemProps = ProfileMain

const MainProfileItem = ({ profile }: { profile: MainProfileItemProps }) => {
  const { id, imgUrl, name, type } = profile

  return (
    <Link href={`/profile/${id}`}>
      <Center flexDirection="column" className="w-fit">
        <Avatar profileImage={imgUrl} size={90} />
        <Spacer size={14} />
        <span className="text-body2 leading-none text-blue">
          {type === '댄서' ? 'Dancer' : 'Team'}
        </span>
        <Spacer size={10} />
        <div className={`${ALIGN_CENTER} w-[90px] `}>
          <span
            className={`${TEXT_OVERFLOW_STYLE} text-body1 leading-none text-gray-100`}
          >
            {name}
          </span>
        </div>
      </Center>
    </Link>
  )
}

export default MainProfileItem
