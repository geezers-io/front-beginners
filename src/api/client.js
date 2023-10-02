const API_KEY = process.env.REACT_APP_DB_API;

/**
 * @param {number} movieId 영화 id
 */
export const getMovie = movieId =>
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`).then(data => data.json());

/**
 * @description 트렌드 영화 리스트를 최신 순으로 불러옵니다.
 * @param page 불러올 데이터의 offset
 * @returns {Promise<{ page: number; results: { adult: false; backdrop_path: string, id: number; title: string; original_language: string; original_title: string; overview: string; poster_path: string; media_type: string; genre_ids: number[]; popularity: number; release_date: string; video: boolean; vote_average: number; vote_count: number;}[] }>}
 */
export const getMovies = (page = 1) =>
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`).then(data => data.json());
