import { Grid, GridItem, Text } from '@chakra-ui/react'
import { CONSTANT_DANCE_GENRE } from '@constants'
import { CSSProperties } from 'react'

interface GenrePopupContentProps {
  containerStyle?: CSSProperties
  textStyle?: CSSProperties
  clickGenre?: string
  handlerFn?: (danceGenre: string) => void
}

const GenrePopupContent = ({
  clickGenre,
  handlerFn,
  containerStyle,
  textStyle,
}: GenrePopupContentProps) => {
  console.log(clickGenre)
  return (
    <Grid
      justifyContent="center"
      gap="16px"
      width="200px"
      templateColumns="repeat(2, 1fr)"
      style={{ ...containerStyle }}
    >
      {CONSTANT_DANCE_GENRE.map((danceGenre) => {
        return (
          <GridItem
            width="100%"
            display="flex"
            justifyContent="center"
            key={danceGenre}
          >
            <Text
              onClick={handlerFn && (() => handlerFn(danceGenre))}
              style={{
                cursor: 'pointer',
                color: clickGenre === danceGenre ? 'black' : 'gray',
                ...textStyle,
              }}
            >
              {danceGenre}
            </Text>
          </GridItem>
        )
      })}
    </Grid>
  )
}

export default GenrePopupContent
