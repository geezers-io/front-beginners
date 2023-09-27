import { getMovieApiKey } from "../utils/env";
const apiKey = getMovieApiKey();

console.log({ apiKey });

export const getMovies = () =>
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
    .then(data => data.json());
