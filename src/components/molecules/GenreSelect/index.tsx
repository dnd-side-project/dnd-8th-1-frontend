import { IconButton } from '@components'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from '@hooks'
import { Portal } from '@chakra-ui/react'
import GenreSelectPopupContent from './GenreSelectPopupContent'
import { GenreTypes } from '@types'

/**
 *TODO: 전체적으로 string[]에 대한 리팩토링 필요 + selected도 지네릭 적용 필요
 */
interface RegionSelectProps {
  selectedGenres?: GenreTypes[]
  handleGenreSelect: (genres: GenreTypes[]) => void
}
const GenreSelect = ({
  handleGenreSelect,
  selectedGenres,
}: RegionSelectProps) => {
  const [selected, setSelected] = useState<GenreTypes[]>(
    selectedGenres ? selectedGenres : [],
  )
  const [isPopupOpen, setIsPopUpOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const regionInputRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useClickAway(popupRef, (e: any) => {
    const { current: triggerWrapper } = regionInputRef
    triggerWrapper &&
      !triggerWrapper.contains(e.target) &&
      setIsPopUpOpen(false)
  })
  const isFullSelected = selected.length === 3
  const isEmptySelected = selected.length === 0
  useEffect(() => {
    handleGenreSelect && handleGenreSelect(selected)
    if (isFullSelected || isEmptySelected) {
      setIsPopUpOpen(false)
    }
  }, [selected])
  const isFullSelect = (tagIndex: number) => {
    return tagIndex === 2
  }
  return (
    <div className="relative w-[343px]">
      <div
        ref={regionInputRef}
        className={`flex w-[100%] items-center border
        ${isPopupOpen ? 'rounded-t-[8px]' : 'rounded-[8px]'} 
        h-[52px] border-[1px] border-gray-600 bg-gray-700 px-[11px] 
        ${
          isPopupOpen && ' border-b-gray-700'
        } relative py-[15px] text-body2 text-gray-400`}
      >
        {/** 선택되었을 때 장르 버튼 부분 */}
        {selected.length !== 0 &&
          selected.map((select, i) => (
            <div
              key={i}
              className={`flex h-[32px] w-fit items-center gap-[10.95px] rounded-[4px] bg-gray-600 py-[8px] px-[10.87px] text-body2 font-bold text-green-light ${
                isFullSelect(i) ? 'mr-[0px]' : 'mr-[5px]'
              }`}
            >
              <span>{select}</span>
              <IconButton
                icon="x-active"
                size={16}
                areaLabel="지역 선택 취소 버튼"
                handleOnClick={() => {
                  setSelected((prev) => {
                    const copy = [...prev]
                    const deleteNum = prev.indexOf(select)
                    copy.splice(deleteNum, 1)
                    return [...copy]
                  })
                }}
              />
            </div>
          ))}

        <Portal containerRef={regionInputRef}>
          <IconButton
            icon={isPopupOpen ? 'arrow-increase' : 'arrow-decrease'}
            size={15}
            areaLabel="팝업 열기 버튼"
            styleClass="absolute top-[20px] right-[17px]"
            handleOnClick={() => {
              setIsPopUpOpen(!isPopupOpen)
            }}
          />
        </Portal>

        {!isPopupOpen && isEmptySelected && (
          <span className="cursor-default">장르를 선택해주세요</span>
        )}
      </div>

      {isPopupOpen && (
        <div
          ref={popupRef}
          className="absolute top-[52px] w-[343px] rounded-b-[8px] border-[1px] border-x-gray-600 border-b-gray-600 border-t-gray-700 bg-gray-700 px-[10px] pb-[20px]"
        >
          <GenreSelectPopupContent
            handleOnClick={(genres: GenreTypes) => {
              if (isFullSelected) {
                if (selected.includes(genres)) {
                  setSelected((prev) => {
                    const deleteNum = prev.indexOf(genres)
                    const copy = [...prev]
                    copy.splice(deleteNum, 1)
                    return copy
                  })
                }
                return
              }
              // 만약 두 번 클릭 한 경우 해당 장르 삭제하는 로직
              if (selected.includes(genres)) {
                setSelected((prev) => {
                  const deleteIndex = prev.indexOf(genres)
                  const copy = [...prev]
                  copy.splice(deleteIndex, 1)
                  return copy
                })
              } else {
                setSelected((prev) => {
                  return [...prev, genres]
                })
              }
            }}
            selectedGenre={selected}
          />
        </div>
      )}
    </div>
  )
}

export default GenreSelect
