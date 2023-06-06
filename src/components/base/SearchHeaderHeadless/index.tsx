import { useSearchForm, SearchForm } from '@hooks'
import { NextRouter } from 'next/router'
import { UseFormRegister, UseFormReset } from 'react-hook-form'

interface SearchHeaderHeadlessArgs {
  router?: NextRouter
  register: UseFormRegister<SearchForm>
  reset: UseFormReset<SearchForm>
}

const SearchHeaderHeadless = (props: {
  children: (args: SearchHeaderHeadlessArgs) => JSX.Element
  headerStyle: string
  formStyle: string
}) => {
  const { router, register, reset, handleSubmit, onSubmit } = useSearchForm()
  return (
    <header className={props.headerStyle}>
      <form onSubmit={handleSubmit(onSubmit)} className={props.formStyle}>
        {props.children({
          router,
          register,
          reset,
        })}
      </form>
    </header>
  )
}

export default SearchHeaderHeadless
