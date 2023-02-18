import { IconButton } from '@components'
import { usePathname, useRouter } from 'next/navigation'

const FormHeader = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div
      className={`top-0 z-[999] block flex justify-end  bg-gray-900 px-[16px] py-[12px]`}
    >
      <IconButton
        icon="x-inactive"
        size={24}
        areaLabel="폼 닫기 버튼"
        handleOnClick={() => router.back()}
      />
    </div>
  )
}

export default FormHeader
