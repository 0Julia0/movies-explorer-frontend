import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import React from "react";

function MoviesCardList({
	movies,
	isSearching,
	isErrorActive,
	notFound,
	saved,
    savedMovies,
    onMovieSave,
    onMovieDelete,
}) {
    const [initialCards, setInitialCards] = React.useState(() => {
        const windowWidth = window.innerWidth;
        if(windowWidth < 720) {
            return 5
        } else if(windowWidth < 920) {
            return 8
        } else if(windowWidth > 920) {
            return 12 
        }
    } );
    const [moreCards, setMoreCards] = React.useState(() => {
        const windowWidth = window.innerWidth;
        if(windowWidth < 720) {
            return 2;
        } else if(windowWidth < 920) {
            return 2
        } else if(windowWidth > 920) {
            return 3
        }
    });

    function handleScreenWidth () {
        const windowWidth = window.innerWidth;
        if(windowWidth < 720) {
            setInitialCards(5)
        } else if(windowWidth < 920) {
            setInitialCards(8)
        } else if(windowWidth > 920) {
            setInitialCards(12)
        }
    }

    const displayedMovies = movies?.slice(0, initialCards);

    function handleAddMovie() {
        setInitialCards(prevState => {return prevState + moreCards});
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleScreenWidth);
    }, []);

    return (
        <section className="movies">
            <Preloader isSearching={isSearching} />
            <span className={isErrorActive ? 'movies__error movies__error_invisible' : 'movies__error'}>
                Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер 
                недоступен. Подождите немного и попробуйте ещё раз
            </span>
            <span className={notFound ? 'movies__error movies__error_invisible' : 'movies__error'}>Ничего не найдено</span>
            <ul className="movies__list">
                {displayedMovies.map(movie => 
                    <MoviesCard 
                        key={saved ? movie.movieId : movie.id}
                        movie={movie}
                        saved={saved}
                        savedMovies={savedMovies}
                        onMovieSave={onMovieSave}
                        onMovieDelete={onMovieDelete}
                    />
                )}
            </ul>
            <button 
                className={saved ? 'movies__button movies__button_invisible' : 'movies__button'}
                onClick={handleAddMovie}
                >
                    Еще
            </button>
        </section>
    )
}

export default MoviesCardList;