const url = process.env.REACT_APP_FLASK_PUBLIC_IP + '/websites/';

const fetchData = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': process.env.REACT_APP_API_KEY,
        'device-name': process.env.REACT_APP_DEVICE_NAME,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export { fetchData };