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
    isSearching,
    savedMovies,
    notFound,
    isErrorActive
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
                isSearching={isSearching}
                saved={true}
                savedMovies={savedMovies}
                onMovieDelete={onMovieDelete}
                notFound={notFound}
                isErrorActive={isErrorActive} 
            />
            <Footer />
        </>
    )
}

export default SavedMovies;