import { getMovie } from './client';
import React from 'react';


function Test() {
    return (
        <div>
            <div className='app-container'>
                { 
                    getMovie.results.map((item) => {
                        return (
                            <Movie
                                title={item.title}
                                poster_path={item.poster_path}
                                vote_average={item.vote_average}
                            />
                        )
                    }
                })
            </div>
        </div>
    )
}

export default Test;
