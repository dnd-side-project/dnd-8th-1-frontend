import { Box, Text } from '@chakra-ui/react'
import { Checkbox } from '@components/atoms'
import { CSSProperties } from 'react'
import { useFormContext } from 'react-hook-form'

interface ToggleTextProps {
  context?: string
  textStyle?: CSSProperties
  containerStyle?: CSSProperties
}

const ToggleText = ({
  context,
  textStyle,
  containerStyle,
}: ToggleTextProps) => {
  const { register } = useFormContext()
  return (
    <Box display="flex" alignItems="center" style={{ ...containerStyle }}>
      <Checkbox {...register('toggleText')} />
      <Text style={{ ...textStyle }}>{context}</Text>
    </Box>
  )
}

export default ToggleText
