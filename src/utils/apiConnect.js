async function fetchMovie(movieName) {
  const URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}&plot=full`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Falha: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    return error;
  }
}

export default fetchMovie;
