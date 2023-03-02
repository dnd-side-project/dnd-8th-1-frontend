interface ProfileKeysType {
  all: readonly string[]
}

export const profileKeys: ProfileKeysType = {
  all: ['profile'] as const,
}
