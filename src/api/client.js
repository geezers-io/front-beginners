const API_KEY = process.env.REACT_APP_DB_API;

/**
 * Represents a movie genre.
 * @typedef {Object} Genre
 *
 * @property {number} id - The unique identifier of the genre.
 * @property {string} name - The name of the genre.
 */

/**
 * Represents a production company.
 * @typedef {Object} ProductionCompany
 *
 * @property {number} id - The unique identifier of the company.
 * @property {?string} logo_path - The logo image path of the company.
 * @property {string} name - The name of the company.
 * @property {string} origin_country - The origin country of the company.
 */

/**
 * Represents a production country.
 * @typedef {Object} ProductionCountry
 *
 * @property {string} iso_3166_1 - The ISO 3166-1 code of the country.
 * @property {string} name - The name of the country.
 */

/**
 * Represents a language spoken in the movie.
 * @typedef {Object} SpokenLanguage
 *
 * @property {string} english_name - The English name of the language.
 * @property {string} iso_639_1 - The ISO 639-1 code of the language.
 * @property {string} name - The name of the language.
 */

/**
 * Represents movie information.
 * @typedef {Object} Movie
 *
 * @property {boolean} adult - Indicates if the movie is for adults.
 * @property {string} backdrop_path - The backdrop image path.
 * @property {?Object} belongs_to_collection - Information about the collection the movie belongs to.
 * @property {number} budget - The budget of the movie.
 * @property {Array<Genre>} genres - List of genres associated with the movie.
 * @property {string} homepage - The official homepage URL of the movie.
 * @property {number} id - The unique identifier of the movie.
 * @property {string} imdb_id - The IMDb identifier of the movie.
 * @property {string} original_language - The original language of the movie.
 * @property {string} original_title - The original title of the movie.
 * @property {string} overview - A short overview or description of the movie.
 * @property {number} popularity - The popularity score of the movie.
 * @property {string} poster_path - The poster image path.
 * @property {Array<ProductionCompany>} production_companies - List of production companies associated with the movie.
 * @property {Array<ProductionCountry>} production_countries - List of production countries associated with the movie.
 * @property {string} release_date - The release date of the movie.
 * @property {number} revenue - The revenue of the movie.
 * @property {number} runtime - The runtime of the movie in minutes.
 * @property {Array<SpokenLanguage>} spoken_languages - List of languages spoken in the movie.
 * @property {string} status - The release status of the movie (e.g., "Released").
 * @property {string} tagline - The tagline of the movie.
 * @property {string} title - The title of the movie.
 * @property {boolean} video - Indicates if the movie has a video.
 * @property {number} vote_average - The average vote score of the movie.
 * @property {number} vote_count - The vote count for the movie.
 */

/**
 * @param movieId {number}
 * @returns {Promise<Movie>}
 */
export const getMovie = movieId =>
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`).then(data => data.json());

/**
 * @description
 * @param page
 * @returns
 * {Promise<{
 *    page: number;
 *    results: {
 *      adult: false;
 *      backdrop_path: string;
 *      id: number; title: string;
 *      original_language: string;
 *      original_title: string;
 *      overview: string;
 *      poster_path: string;
 *      media_type: string;
 *      genre_ids: number[];
 *      popularity: number;
 *      release_date: string;
 *      video: boolean;
 *      vote_average: number;
 *      vote_count: number;
 *   }[]
 * }>}
 */
export const getMovies = (page = 1) =>
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`).then(data => data.json());
