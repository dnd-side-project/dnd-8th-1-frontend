import { Center, Grid } from '@chakra-ui/react'
import { GENRES } from '@constants'

interface GenrePopupContentProps {
  selectedGenre: string[]
  handleOnClick?: (danceGenre: string) => void
}

const GenreSelectPopupContent = ({
  selectedGenre,
  handleOnClick,
}: GenrePopupContentProps) => {
  const isSelect = (genre: string) => {
    return selectedGenre.includes(genre)
  }
  return (
    <Grid
      width="315px"
      height="178px"
      gap="16px"
      templateColumns="repeat(3, 1fr)"
    >
      {GENRES.map((genre) => {
        return (
          <Center
            width="100%"
            className={`
            rounded-[4px]
              ${
                isSelect(genre)
                  ? 'bg-green-opacity_10'
                  : `bg-gray-700 ${
                      selectedGenre.length !== 3 && 'hover:bg-gray-600'
                    }`
              }`}
            key={genre}
            onClick={handleOnClick && (() => handleOnClick(genre))}
          >
            <div
              className={`w-[100%] text-center ${
                (isSelect(genre) || selectedGenre.length !== 3) &&
                'cursor-pointer'
              }`}
            >
              <span
                className={`text-body2 ${
                  isSelect(genre)
                    ? 'font-bold text-green-light'
                    : selectedGenre.length !== 3
                    ? 'font-normal text-gray-400'
                    : 'text-[#525252]'
                }`}
              >
                {genre}
              </span>
            </div>
          </Center>
        )
      })}
    </Grid>
  )
}

export default GenreSelectPopupContent
