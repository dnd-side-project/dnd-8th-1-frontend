interface performanceKeysType {
  all: readonly string[]
  detail: (performanceId: number) => readonly string[]
  reviews: (performanceId: number) => readonly string[]
}

export const performanceKeys: performanceKeysType = {
  all: ['performance'] as const,
  detail: (performanceId) =>
    [...performanceKeys.all, 'detail', performanceId.toString()] as const,
  reviews: (performanceId) =>
    [...performanceKeys.detail(performanceId), 'review'] as const,
}
