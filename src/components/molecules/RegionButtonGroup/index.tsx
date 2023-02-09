import { Button, Center, Grid, Text } from '@chakra-ui/react'
import { REGIONS } from '@constants'

interface RegionButtonGroupProps {
  containerStyle?: string
  textStyle?: string
  gridItemStyle?: string
  buttonStyle?: string
  selectedRegion?: string
  handleOnClick?: (region: string) => void
}

const RegionButtonGroup = ({
  selectedRegion,
  handleOnClick,
  containerStyle,
  gridItemStyle,
  buttonStyle,
  textStyle,
}: RegionButtonGroupProps) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" className={containerStyle}>
      {REGIONS.map((region) => {
        return (
          <Center
            width="100%"
            key={region}
            className={gridItemStyle}
            onClick={handleOnClick && (() => handleOnClick(region))}
          >
            <Button
              width="100%"
              variant="unstyled"
              borderRadius="5px"
              transition="all 0.01s ease-in-out"
              bgColor={selectedRegion === region ? '#191919' : 'white'}
              className={buttonStyle}
            >
              <Text
                className={`font-normal ${
                  selectedRegion === region ? 'text-green-200' : 'text-black'
                } ${textStyle}`}
              >
                {region}
              </Text>
            </Button>
          </Center>
        )
      })}
    </Grid>
  )
}

export default RegionButtonGroup
