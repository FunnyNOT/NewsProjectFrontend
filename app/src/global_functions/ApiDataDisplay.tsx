const websites_url = process.env.REACT_APP_FLASK_PUBLIC_IP + '/websites/'

const fetchData = async () => {
  try {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('api-key', process.env.REACT_APP_API_KEY || '');

    const response = await fetch(websites_url, {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.websites
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

const fetchArticles = async (websiteId: number) => {
  try {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('api-key', process.env.REACT_APP_API_KEY || '');

    const articles_url = process.env.REACT_APP_FLASK_PUBLIC_IP + '/websites/' + websiteId
    const response = await fetch(articles_url, {
      method: 'GET',
      headers: headers
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
