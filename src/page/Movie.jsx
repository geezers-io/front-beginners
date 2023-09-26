import React from "react";
import Test from "../api/test";

export default function Movie((title, poster_path, vote_average)){
    return(
        <div className="movie-container">
            <img src="" alt="영화 포스터" />
            <div className="movie-info">
                <h4>{title} </h4>
                <span>{vote_average} </span>
            </div>
        </div>
    )
}