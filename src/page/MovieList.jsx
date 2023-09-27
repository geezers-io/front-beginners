import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/movie';
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState({
        loading: true,
        list: [],
    });

    useEffect(() => {
        (async () => {
            try {
                const movies = await getMovies();
                setMovies(() => ({
                    loading: false,
                    list: movies.results,
                }));
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    if (movies.loading) {
        return null;
    }

    return (
        <div>
            <div className='app-container'>
                {movies.list.map(item => (
                    <Movie
                    key={item.title}
                    title={item.title}
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                />
                ))}
            </div>
        </div>
    );
}
