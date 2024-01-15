const url = process.env.REACT_APP_FLASK_PUBLIC_IP + '/websites/'
console.log('url:', url)

const fetchData = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.REACT_APP_API_KEY,
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const result = await response.json()
    return result.websites
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

export { fetchData }
