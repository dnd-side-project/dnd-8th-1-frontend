interface SpacerProps {
  size: number
  // vertical : 세로 요소 간에 간격을 줍니다.
  // horizontal : 가로 요소 간에 간격을 줍니다.
  axis?: 'vertical' | 'horizontal'
}

import React from 'react'
const Spacer = ({ size, axis = 'vertical' }: SpacerProps) => {
  const width = axis === 'vertical' ? 1 : size
  const height = axis === 'horizontal' ? 1 : size

  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
    />
  )
}
export default Spacer
