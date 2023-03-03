interface ProfileKeysType {
  all: readonly string[]
  detail: (memberId: number) => readonly [...string[], 'detail', string]
}

export const profileKeys: ProfileKeysType = {
  all: ['profile'] as const,
  detail: (memberId) =>
    [...profileKeys.all, 'detail', memberId.toString()] as const,
}
