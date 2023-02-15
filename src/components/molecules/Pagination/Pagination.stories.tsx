import Pagination from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  component: Pagination,
  title: 'Molecules/Pagination',
  argTypes: {
    currentPage: { defaultValue: 1 },
    totalPages: {
      defaultValue: 13,
    },
    handleChangePage: {
      defaultValue: (page: number) => console.log(page, '로 페이지가 변경됨'),
    },
  },
  parameters: {
    componentSubtitle: '페이지네이션을 위한 컴포넌트',
  },
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = () => {
  const [pageNumber, setPageNuimber] = useState(1)

  return (
    <>
      <Pagination
        currentPage={1}
        totalPages={13}
        handleChangePage={(page) => setPageNuimber(page)}
      />
      <div className="mt-[11px]">
        현재 페이지 번호 :
        <span className="font-bold text-[#FD1301]">{pageNumber}</span>
      </div>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
