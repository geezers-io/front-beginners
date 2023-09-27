import React from "react";
import PropTypes from 'prop-types';

// export default function Movie({ title, poster_path, vote_average }){
//     return(
//         <div className="movie-container">
//             <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="영화 포스터" />
//             <div className="movie-info">
//                 <h4>{title} </h4>
//                 <span>{vote_average} </span>
//             </div>
//         </div>
//     )
// }

export default function Movie({movies}){
    return(
        <Card> 
            <CarBody>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="영화 포스터" />
                <Stack>
                    <Heading size='md'>{movies.title} </Heading>
                    <Text> {movies.overview} </Text>
                    <Text >{movies.vote_average} </Text>
                </Stack>
            </CarBody>
        </Card>
    )
}


MovieCard.propTypes = {
    movie: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    media_type: PropTypes.string,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    }),
};