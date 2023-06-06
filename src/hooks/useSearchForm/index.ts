import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export interface SearchForm {
  search: string
}

const useSearchForm = () => {
  const { register, reset, handleSubmit } = useForm<SearchForm>()
  const router = useRouter()
  const onSubmit = (data: SearchForm) => {
    router.push(`/performance/search?team=${data.search}`)
    reset()
  }
  return { router, register, reset, handleSubmit, onSubmit }
}

export default useSearchForm
