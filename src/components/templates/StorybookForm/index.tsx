/* eslint-disable react/display-name */
import { ReactNode, FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const StorybookFormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

const StoryBookHOC = () => (Story: FC) =>
  (
    <StorybookFormProvider>
      <Story />
    </StorybookFormProvider>
  )

export default StoryBookHOC
