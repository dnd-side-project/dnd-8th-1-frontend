interface MeetKeysType {
  all: readonly string[]
  detail: (meetId: number, accessToken: string) => readonly string[]
  candidate: readonly string[]
}

export const meetKeys: MeetKeysType = {
  all: ['meet'] as const,
  detail: (meetId, accessToken) =>
    [...meetKeys.all, 'detail', meetId.toString(), accessToken] as const,
  candidate: ['meet-candidate'] as const,
}
