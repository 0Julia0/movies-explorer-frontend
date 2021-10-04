import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({
	loggedIn,
	onSearchSavedMovies,
	onShortMoviesCheck,
	isShortMoviesChecked,
    onMovieDelete,
    movies,
    savedMovies
}) {
    return (
        <>
            <Header loggedIn={loggedIn} main={false}/>
            <SearchForm 
                onSearchSavedMovies={onSearchSavedMovies}
                saved={true}
                onShortMoviesCheck={onShortMoviesCheck}
                isChecked={isShortMoviesChecked}
            />
            <MoviesCardList 
                movies={movies}
                savedMovies={savedMovies}
                saved={true}
                onMovieDelete={onMovieDelete}
            />
            <Footer />
        </>
    )
}

export default SavedMovies;