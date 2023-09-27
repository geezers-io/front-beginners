/**
 * @param {number} movieId 영화 id
 */
export const getMovie = movieId =>
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`).then(data => data.json());
