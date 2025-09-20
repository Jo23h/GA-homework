const BASE_URL = "https://swapi.info/api/starships"

const index = async () => {
  try {
    // fetch returns a Promise object - the state e.g., pending
    // await tells JS to wait for Promise to be completed and give the actual response
    const response = await fetch(BASE_URL);

    // Handles HTTP status errors
    if (!response.ok) {
      throw new Error('Failed to fetch starships.');
    }
    const data = await response.json();
    return data;

    // Handles technical errors (network failures, invalid JSON, etc.)
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export {index}