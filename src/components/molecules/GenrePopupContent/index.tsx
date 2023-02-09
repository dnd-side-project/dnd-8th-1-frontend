import { Button, Grid, GridItem, Text } from '@chakra-ui/react'
import { DANCE_GENRE } from '@constants'

interface GenrePopupContentProps {
  containerStyle?: string
  textStyle?: string
  selectedGenre?: string
  handleOnClick?: (danceGenre: string) => void
}

const GenrePopupContent = ({
  selectedGenre,
  handleOnClick,
  containerStyle,
  textStyle,
}: GenrePopupContentProps) => {
  return (
    <Grid
      justifyContent="center"
      gap="16px"
      width="200px"
      templateColumns="repeat(2, 1fr)"
      className={containerStyle}
    >
      {DANCE_GENRE.map((danceGenre) => {
        return (
          <GridItem
            width="100%"
            display="flex"
            justifyContent="center"
            key={danceGenre}
          >
            <Button
              variant="unstyled"
              onClick={handleOnClick && (() => handleOnClick(danceGenre))}
            >
              <Text
                className={`font-normal ${
                  selectedGenre === danceGenre ? 'text-black' : 'text-gray-200'
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
