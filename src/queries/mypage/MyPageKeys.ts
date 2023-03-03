interface MyPageKeys {
  events: (userId: number) => readonly string[]
  applications: (userId: number) => readonly string[]
  performances: (userId: number) => readonly string[]
  reviews: (userId: number) => readonly string[]
}

export const myPageKeys: MyPageKeys = {
  events: (userId) => [userId.toString(), 'events'],
  applications: (userId) => [userId.toString(), 'applications'],
  performances: (userId) => [userId.toString(), 'performances'],
  reviews: (userId) => [userId.toString(), 'reviews'],
}
