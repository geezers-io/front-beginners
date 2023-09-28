const API_KEY = process.env.REACT_APP_DB_API;

/**
 * @param {number} movieId 영화 id
 */
export const getMovie = movieId =>
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`).then(data => data.json());

export const getMovies = () =>
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`).then(data => data.json());
