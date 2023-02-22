export const useRouter = () => ({
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  prefetch: () => {
    console.log('router.prefetch')
  },
  push: () => {
    console.log('router.push')
  },
})
