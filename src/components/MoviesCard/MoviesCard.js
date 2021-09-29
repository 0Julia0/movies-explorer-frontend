import './MoviesCard.css';
import React from "react";
import {useLocation} from 'react-router-dom';

function MoviesCard({
	movie,
	savedMovies,
	onMovieSave,
	onMovieDelete,
	saved,
}) {
    const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);
    const [isSaved, setIsSaved] = React.useState(false);

    const film = {
        country : movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie?.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.image,
        movieId: movie.id,
    }
    const currentMovie = savedMovies.find((movie) => film.nameRU === movie.nameRU);

    const location = useLocation();

    function handleCardMouseOver() {
        setIsDeleteButtonVisible(true);
    }

    function handleCardMouseOut() {
        setIsDeleteButtonVisible(false);
    }

    function handleLike() {
        onMovieSave(film);
        setIsSaved(true);
    }

    function handleDislike() {
        setIsSaved(false);
        onMovieDelete(currentMovie._id);
    }

    function handleDeleteMovie() {
        onMovieDelete(movie._id);
        setIsSaved(false);
    }

    React.useEffect(() => {
        if(currentMovie) {
            setIsSaved(true)
        }

    }, [currentMovie, location])

    return (
        <li className="movies__list-item">
            <a className="movies__list-link" href={saved ? movie.trailer : movie.trailerLink}>
                <img className="movies__list-poster" alt={movie.nameRU} src={movie.image}/>
            </a>
            <div className="movies__list-description" onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
                <p className="movies__list-title">{movie.nameRU}</p>
                {saved ?
                    <button className={isDeleteButtonVisible ? 'movies__list-delete movies__list-delete_visible' : 'movies__list-delete'} onClick={handleDeleteMovie}></button> :
                    <button className={`movies__list-like ${isSaved ? 'movies__list-like_active' : ''}`} onClick={isSaved ? handleDislike : handleLike}></button>
                }
            </div>
            <p className="movies__list-duration">{`${Math.trunc(film.duration/60)}ч${film.duration % 60}м`}</p>
        </li>
    )
}

export default MoviesCard;