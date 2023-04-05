import { Center, Grid } from '@chakra-ui/react'
import { GENRES } from '@constants'

interface GenrePopupContentProps {
  selectedGenre?: string
  handleOnClick?: (danceGenre: string) => void
}

const GenrePopupContent = ({
  selectedGenre,
  handleOnClick,
}: GenrePopupContentProps) => {
  const isSelect = (genre: string) => {
    return selectedGenre === genre
  }
  return (
    <Grid width="315px" height="178px" templateColumns="repeat(3, 1fr)">
      {GENRES.map((genre) => {
        return (
          <Center
            width="100%"
            className={`
            rounded-[4px]
              ${isSelect(genre) ? 'bg-green-opacity_10' : 'bg-gray-700'}`}
            key={genre}
            onClick={handleOnClick && (() => handleOnClick(genre))}
          >
            <button className="w-[100%]">
              <span
                className={`text-body2 ${
                  isSelect(genre)
                    ? 'font-bold text-green-light'
                    : 'font-normal text-gray-400'
                }`}
              >
                {genre}
              </span>
            </button>
          </Center>
        )
      })}
    </Grid>
  )
}

export default GenrePopupContent
