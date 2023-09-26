const apiKey = '9c84d12465faea3c6eb718384b907143';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yzg0ZDEyNDY1ZmFlYTNjNmViNzE4Mzg0YjkwNzE0MyIsInN1YiI6IjY1MTJlMjRkMTc2YTk0MDBhZWNmY2FiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y10Pz30t4qHgDb97VMDOq3c_5mSc7UGo7bDJFqCWQ4M';

/**
 * 
 * @param {number} movieId 영화 id 
 */
export const getMovie = (movieId) =>
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
    .then(data => data.json());
