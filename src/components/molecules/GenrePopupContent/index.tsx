import { Button, Grid, GridItem, Text } from '@chakra-ui/react'
import { GENRE } from '@constants'

interface GenrePopupContentProps {
  containerStyle?: string
  textStyle?: string
  gridItemStyle?: string
  buttonStyle?: string
  selectedGenre?: string
  handleOnClick?: (danceGenre: string) => void
}

const GenrePopupContent = ({
  selectedGenre,
  handleOnClick,
  containerStyle,
  textStyle,
  buttonStyle,
  gridItemStyle,
}: GenrePopupContentProps) => {
  return (
    <Grid
      className={`w-[200px] grid-cols-2 justify-center gap-[16px] ${containerStyle}`}
    >
      {GENRE.map((danceGenre) => {
        return (
          <GridItem
            key={danceGenre}
            className={`flex w-full items-center justify-center ${gridItemStyle}`}
          >
            <Button
              variant="unstyled"
              onClick={handleOnClick && (() => handleOnClick(danceGenre))}
              className={buttonStyle}
            >
              <Text
                className={`font-normal ${
                  selectedGenre === danceGenre ? 'text-black' : 'text-gray-400'
                } ${textStyle}`}
              >
                {danceGenre}
              </Text>
            </Button>
          </GridItem>
        )
      })}
    </Grid>
  )
}

export default GenrePopupContent
