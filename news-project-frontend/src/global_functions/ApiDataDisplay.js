const websites_url = process.env.REACT_APP_FLASK_PUBLIC_IP + '/websites/'
console.log('url:', websites_url)

const fetchData = async () => {
  try {
    const response = await fetch(websites_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.REACT_APP_API_KEY
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

const fetchArticles = async (websiteId) => {
  try {
    const articles_url = process.env.REACT_APP_FLASK_PUBLIC_IP + '/websites/' + websiteId
    const response = await fetch(articles_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.REACT_APP_API_KEY
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

export { fetchData }
export { fetchArticles }
