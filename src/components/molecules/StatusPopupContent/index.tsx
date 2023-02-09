import { Box, Button, Divider } from '@chakra-ui/react'

interface StatusPopupContentProps {
  containerStyle?: string
  deleteButtonStyle?: string
  modifyButtonStyle?: string
  dividerStyle?: string
  handleOnModify: () => void
  handleOnDelete: () => void
}

const StatusPopupContent = ({
  containerStyle,
  deleteButtonStyle,
  modifyButtonStyle,
  dividerStyle,
  handleOnModify,
  handleOnDelete,
}: StatusPopupContentProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={containerStyle}
    >
      <Button
        fontWeight="normal"
        variant="unstyled"
        className={deleteButtonStyle}
        onClick={handleOnModify}
      >
        수정하기
      </Button>
      <Divider marginY="12px" className={dividerStyle} />
      <Button
        fontWeight="normal"
        variant="unstyled"
        className={modifyButtonStyle}
        onClick={handleOnDelete}
      >
        삭제하기
      </Button>
    </Box>
  )
}

export default StatusPopupContent
