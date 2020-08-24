import React from "react";
import { Link } from "react-router-dom"
import ProTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link
            to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <div className="movie__title">{title}</div>
                    <div className="movie__year">{year}</div>
                    <ul className="movie__genres">{genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}</ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    )
}

Movie.ProTypes = {
    id: ProTypes.number.isRequired,
    year: ProTypes.number.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    poster: ProTypes.string.isRequired,
    genres: ProTypes.arrayOf(ProTypes.string).isRequired
};

export default Movie;