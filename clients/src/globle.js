export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/cities`
    : 'http://localhost:3001/cities'
