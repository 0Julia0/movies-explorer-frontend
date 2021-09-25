import './MoviesCard.css';
import poster from '../../images/film.svg';
import React from "react";

function MoviesCard(props) {
    const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    function handleCardMouseOver() {
        setIsDeleteButtonVisible(true);
    }

    function handleCardMouseOut() {
        setIsDeleteButtonVisible(false);
    }

    function handleLikeButtonCLick() {
        setIsLiked(!isLiked);
    }
    
    return (
        <li className="movies__list-item">
            <img className="movies__list-poster" src={poster} alt="Фильм"/>
            <div className="movies__list-description" onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
                <p className="movies__list-title">33 слова о дизайне</p>
                {props.saved ?
                    <button className={isDeleteButtonVisible ? 'movies__list-delete movies__list-delete_visible' : 'movies__list-delete'}></button> :
                    <button className={`movies__list-like ${isLiked ? 'movies__list-like_active' : ''}`} onClick={handleLikeButtonCLick}></button>}
            </div>
            <p className="movies__list-duration">1ч 47м</p>
        </li>
        )

}

export default MoviesCard;