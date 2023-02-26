import { useState } from 'react'

const ProfileDescription = ({ description }: { description: string }) => {
  const [showMore, setShowMore] = useState(false)
  const showMoreButtonStyle =
    'h-[46px] w-[343px] bg-gray-700 text-body2 font-bold text-gray-100 rounded-b-[10px] border-t-[1px] border-t-gray-600'

  return (
    <div className="w-[343px] rounded-[10px] bg-gray-700">
      <div
        className={`${
          !showMore && 'h-[143px] overflow-hidden '
        } min-h-[143px] whitespace-pre-wrap p-[16px] text-body2 text-gray-100`}
      >
        <p
          className={`text-justify ${
            !showMore && 'line-clamp-5 h-[105px] overflow-hidden'
          }`}
        >
          {description}
        </p>
      </div>

      {showMore ? (
        <button
          className={showMoreButtonStyle}
          onClick={() => setShowMore(false)}
        >
          접기
        </button>
      ) : (
        <button
          onClick={() => setShowMore(true)}
          className={showMoreButtonStyle}
        >
          더보기
        </button>
      )}
    </div>
  )
}

export default ProfileDescription
