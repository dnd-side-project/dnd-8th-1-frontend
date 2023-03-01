export const getGoogleUrl = () => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`

  const options = {
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    response_type: 'token',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const queryString = new URLSearchParams(options as any)

  return `${rootUrl}?${queryString.toString()}`
}
