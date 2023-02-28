interface MeetKeysType {
  all: readonly string[]
  detail: (performanceId: number) => readonly string[]
  candidate: readonly string[]
}

export const meetKeys: MeetKeysType = {
  all: ['meet'] as const,
  detail: (performanceId) =>
    [...meetKeys.all, 'detail', performanceId.toString()] as const,
  candidate: ['meet-candidate'] as const,
}
