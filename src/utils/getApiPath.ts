export const getApiPath = (apiPath: string): string => {
  const path = `${process.env.NEXT_PUBLIC_API_URL}${apiPath}`

  return path
}