export const getSessionToken = () => {
  // Function to get a specific cookie by name
  const getCookie = (name) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
  }

  // Retrieve the session token cookie
  const sessionToken = getCookie('sessionToken')

  return sessionToken || null
}
