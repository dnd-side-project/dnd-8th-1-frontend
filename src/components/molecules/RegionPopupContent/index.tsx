import { Center, Grid } from '@chakra-ui/react'
import { REGIONS } from '@constants'

interface RegionButtonGroupProps {
  selectedRegion?: string
  handleOnClick?: (region: string) => void
}

const RegionPopupContent = ({
  selectedRegion,
  handleOnClick,
}: RegionButtonGroupProps) => {
  const isSelect = (region: string) => {
    return selectedRegion === region
  }
  return (
    <Grid width="333px" height="160px" templateColumns="repeat(4, 1fr)">
      {REGIONS.map((region) => {
        return (
          <Center
            width="100%"
            className={`
            rounded-[4px]
              ${isSelect(region) ? 'bg-green-opacity_10' : 'bg-gray-600'}`}
            key={region}
            onClick={handleOnClick && (() => handleOnClick(region))}
          >
            <button className="w-[100%]">
              <span
                className={`text-body2 ${
                  isSelect(region)
                    ? 'font-bold text-green-light'
                    : 'font-normal text-gray-400'
                }`}
              >
                {region}
              </span>
            </button>
          </Center>
        )
      })}
    </Grid>
  )
}

export default RegionPopupContent
