import { Box, Text } from '@chakra-ui/react'
import { Checkbox } from '@components'
import { useFormContext } from 'react-hook-form'

interface ToggleTextProps {
  content?: string
  textStyle?: string
  containerStyle?: string
  checkboxStyle?: string
}

const ToggleText = ({
  content,
  textStyle,
  containerStyle,
  checkboxStyle,
}: ToggleTextProps) => {
  const { register } = useFormContext()
  return (
    <Box display="flex" alignItems="center" className={containerStyle}>
      <Checkbox className={checkboxStyle} {...register('toggleText')} />
      <Text className={textStyle}>{content}</Text>
    </Box>
  )
}

export default ToggleText
