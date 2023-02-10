export * from './server'
export * from './browser'
export * from './handlers'

export async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('@mocks')
    server.listen()
  } else {
    const { worker } = await import('@mocks')
    worker.start()
  }
}

initMocks()
