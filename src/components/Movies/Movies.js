import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({
	loggedIn,
	onSearchMovies,
	onShortMoviesCheck,
	isShortMoviesChecked,
	movies,
	isSearching,
    isErrorActive,
	notFound,
    savedMovies,
	onMovieSave,
	onMovieDelete,
}) {
    return (
        <>
        <Header loggedIn={loggedIn} main={false}/>
        <SearchForm
        	onSearchMovies={onSearchMovies}
            saved={false}
        	onShortMoviesCheck={onShortMoviesCheck}
        	isChecked={isShortMoviesChecked}
        />
        <MoviesCardList 
            movies={movies} 
            isSearching={isSearching}
            isErrorActive={isErrorActive} 
            notFound={notFound}
            saved={false}
            savedMovies={savedMovies}
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
        />
            <Footer />
        </>
    )
}

export default Movies;