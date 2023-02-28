interface MeetKeysType {
  all: readonly string[]
  detail: (meetId: number) => readonly string[]
  candidate: readonly string[]
}

export const meetKeys: MeetKeysType = {
  all: ['meet'] as const,
  detail: (meetId) => [...meetKeys.all, 'detail', meetId.toString()] as const,
  candidate: ['meet-candidate'] as const,
}
