import { useDisclosure } from '@hooks'
import { Comment } from '@types'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'

const CancelSubmitModal = dynamic(
  () => import('../../../components/templates/CancelSubmitModal'),
  {
    ssr: false,
  },
)

interface PerformanceReviewItemProp {
  reviewItem: Comment
  handleOnDelete: (reviewId: number) => void
}

const PerformanceReviewItem = ({
  reviewItem,
  handleOnDelete,
}: PerformanceReviewItemProp) => {
  const { content, reviewId, createdDate, writer } = reviewItem
  const { id } = useRecoilValue(userAtom)

  const [showReviewDeleteModal, setShowReviewDeleteModal] = useDisclosure()
  return (
    <>
      <li className="flex justify-center">
        <div className="mb-[42px] w-[90%] border-b border-gray-700 pb-[24px]">
          <div className="relative mb-[9px] flex gap-[8px]">
            <span className="text-body2 font-bold text-gray-300">
              {writer?.name}
            </span>
            <span className="text-body2 text-gray-500 ">
              {dayjs(createdDate).format('· M월 D일')}
            </span>
            {/* TODO: 현재 로그인한 유저의 후기일 경우에만 렌더링 */}
            {writer.id === id && (
              <button
                className="absolute right-0 text-body2 text-gray-400"
                onClick={() => setShowReviewDeleteModal(true)}
              >
                삭제
              </button>
            )}
          </div>
          <p className="whitespace-pre-wrap text-body2 text-gray-100">
            {content}
          </p>
        </div>
      </li>

      {showReviewDeleteModal && (
        <div className="fixed">
          <CancelSubmitModal
            showModal={showReviewDeleteModal}
            setShowModal={setShowReviewDeleteModal}
            modalContent="후기를 삭제할까요?"
            submitMessage="네, 삭제할게요"
            handleOnSubmit={() => {
              handleOnDelete(reviewId)
              setShowReviewDeleteModal(false)
            }}
          />
        </div>
      )}
    </>
  )
}

export default PerformanceReviewItem
