import { Grid, GridItem, Text } from '@chakra-ui/react'
import { CONSTANT_REGION } from '@constants'
import { CSSProperties } from 'react'

interface RegionButtonGroupProps {
  containerStyle?: CSSProperties
  textStyle?: CSSProperties
  gridItemStyle?: CSSProperties
  clickRegion?: string
  handlerFn?: (region: string) => void
}

const RegionButtonGroup = ({
  clickRegion,
  handlerFn,
  containerStyle,
  gridItemStyle,
  textStyle,
}: RegionButtonGroupProps) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" style={{ ...containerStyle }}>
      {CONSTANT_REGION.map((region) => {
        return (
          <GridItem
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            key={region}
            style={{
              cursor: 'pointer',
              backgroundColor: clickRegion === region ? 'gray' : 'white',
              ...gridItemStyle,
            }}
            onClick={handlerFn && (() => handlerFn(region))}
          >
            <Text
              style={{
                ...textStyle,
              }}
            >
              {region}
            </Text>
          </GridItem>
        )
      })}
    </Grid>
  )
}

export default RegionButtonGroup
