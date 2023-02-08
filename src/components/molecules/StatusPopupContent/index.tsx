import { Box, Divider, Text } from '@chakra-ui/react'
import { CSSProperties } from 'react'

interface StatusPopupContentProps {
  containerStyle?: CSSProperties
  modifyTextStyle?: CSSProperties
  deleteTextStyle?: CSSProperties
  dividerStyle?: CSSProperties
  modifyFn: () => void
  deleteFn: () => void
}

const StatusPopupContent = ({
  containerStyle,
  modifyTextStyle,
  deleteTextStyle,
  dividerStyle,
  modifyFn,
  deleteFn,
}: StatusPopupContentProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      style={{
        ...containerStyle,
      }}
    >
      <Text style={{ ...modifyTextStyle }} onClick={modifyFn}>
        수정하기
      </Text>
      <Divider style={{ ...dividerStyle }} marginY={'12px'} />
      <Text style={{ ...deleteTextStyle }} onClick={deleteFn}>
        삭제하기
      </Text>
    </Box>
  )
}

export default StatusPopupContent
