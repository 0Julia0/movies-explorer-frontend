import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { 
    badRequestErrorText, 
    registrationErrorText,
    authorizationErrorText,
    successProfileMessage,
    updateProfileErrorText
 } from '../../utils/constants';

function App() {
    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
	const [isSearching, setIsSearching] = React.useState(false);
	const [isUpdateSuccess, setIsUpdateSuccess] = React.useState(true);
	const [movies, setMovies] = React.useState([]);
	const [notFound, setNotFound] = React.useState(false);
	const [isMoviesErrorActive, setIsMoviesErrorActive] = React.useState(false);
	const [allMovies, setAllMovies] = React.useState([]);
    const [isShortMoviesChecked, setIsShortMoviesChecked] = React.useState(false);
    const [isSaving, setIsSaving] = React.useState(false);
	const [editProfileMessage, setEditProfileMessage] = React.useState('');
    const [registerErrorMessage, setRegisterErrorMessage] = React.useState('');
    const [loginErrorMessage, setLoginErrorMessage] = React.useState('');
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [isCheckingToken, setIsCheckingToken] = React.useState(true);
    const [rememberedMovies, setRememberedMovies] = React.useState([]);
    const history = useHistory();

    React.useEffect(() => {
        if (loggedIn) {
          Promise.all([mainApi.getUserInfo(), mainApi.getUserMovies()])
          .then(([userData, movies]) => {
            setMovies(JSON.parse(localStorage.getItem('movies')))
            setCurrentUser(userData);
            setSavedMovies(movies);
            setRememberedMovies(movies);
          })
          .catch((err) => {
            console.log(err);
          })
       }
     }, [loggedIn]);

    function handleShortMoviesCheck(evt) {
        setIsShortMoviesChecked(evt.target.checked);
    }

    function handleRegister(name, email, password) {
        setIsSaving(true);
        return mainApi
            .register(name, email, password)
            .then((res) => {
                if(res) {
                    setRegisterErrorMessage('')
                    handleLogin(email, password);
                } else if(res.error === 'Bad Request') {
                    setRegisterErrorMessage(badRequestErrorText);
                } else if(res.message) {
                    setRegisterErrorMessage(res.message);
                }
            })
            .catch(() => {
                setRegisterErrorMessage(registrationErrorText);
            })
            .finally(() => {
                setIsSaving(false);
            })
    }

	function handleLogin(email, password) {
        setIsSaving(true);
        return mainApi
            .authorize(email, password)
            .then((res) => {
                if(res) {
                    setCurrentUser(res);
                    setLoggedIn(true);
                    setLoginErrorMessage('');
                    history.push('/movies');
                } else if(res.error === 'Bad Request') {
                    setLoginErrorMessage(badRequestErrorText);
                } else if(res.message) {
                    setLoginErrorMessage(res.message);
                }
            })
            .catch(() => {
                setLoginErrorMessage(authorizationErrorText);
              })
            .finally(() => {
                setIsSaving(false);
            })
    }

    function handleUpdateUser(name, email) {
		setIsSaving(true);
		return mainApi
            .updateProfile(name, email)
			.then((res) => {
				if(res) {
			 		setCurrentUser(res);
					setIsUpdateSuccess(true);
                    setEditProfileMessage(successProfileMessage);
				} else if(res.error === 'Bad Request') {
					setEditProfileMessage(badRequestErrorText);
                    setIsUpdateSuccess(false);
			    }
			})
		    .catch(() => {
		 		setEditProfileMessage(updateProfileErrorText);
				setIsUpdateSuccess(false);
			})
		 	.finally(() => {
				setIsSaving(false);
		    })
	}

    function handleSignOut() {
        mainApi.logout()
        .then(() => {
            localStorage.removeItem('movies');
            setLoggedIn(false)
            setMovies([]);
            setAllMovies([]);
            history.push('/');
        })
      }

    function clearAllErrorMessages() {
        setRegisterErrorMessage('');
        setLoginErrorMessage('');
        setEditProfileMessage('');
    }

	function handleSearchMovies(movies, data) {
        let foundMovies = [];
        movies.forEach((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(data.toLowerCase()) ||
            movie.nameEN?.toLowerCase().includes(data.toLowerCase())
            if(searchName) {
                if(isShortMoviesChecked) {
                    if(movie.duration <= 40 && searchName) {
                        return foundMovies.push(movie);
                    }
                    return
                }
                return foundMovies.push(movie);
            }
        })
        return foundMovies;
    }

    function searchSavedMovies(data) {
        setIsSearching(true);
        setNotFound(false);
        setIsMoviesErrorActive(false);
        const searchSavedResult = handleSearchMovies(rememberedMovies, data);
        if(searchSavedResult.length === 0) {
            setNotFound(true);
            setIsSearching(false);
            setSavedMovies([]);
        } else {
           setNotFound(false);
           setSavedMovies(searchSavedResult);
           setIsSearching(false);
        }
    }

	function searchMovies(data) {
        setIsSearching(true);
        setMovies([]);
        setNotFound(false);
        setIsMoviesErrorActive(false);
            if(allMovies.length === 0) {
                moviesApi.getMovies()
                    .then((movies) => {
                        setAllMovies(movies)
                        const searchResult = handleSearchMovies(movies, data);
                        if(searchResult.length === 0) {
                            setNotFound(true);
                            setMovies([]);
                        } else {
                            localStorage.setItem('movies', JSON.stringify(searchResult))
                            setMovies(JSON.parse(localStorage.getItem('movies')));
                        }
                    })
                    .catch(() => {
                        setIsMoviesErrorActive(true);
                        setMovies([]);
                    })
                    .finally(() => {
                        setIsSearching(false);
                    })
            } else {
                const searchResult = handleSearchMovies(allMovies, data);
                if(searchResult.length === 0) {
                    setNotFound(true);
                    setMovies([]);
                    setIsSearching(false);
                } else if(searchResult.length !== 0) {
                    localStorage.setItem('movies', JSON.stringify(searchResult));
                    setMovies(JSON.parse(localStorage.getItem('movies')));
                    setIsSearching(false);
                } else {
                    setIsMoviesErrorActive(true);
                    setMovies([]);
                }
            }
    }

    function handleMovieSave(data) {
        setIsSaving(true);
        mainApi.saveMovie(data)
          .then((newMovie) => {
            setSavedMovies([newMovie, ...savedMovies]);
            setRememberedMovies([newMovie, ...savedMovies]);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsSaving(false);
          })
      }


   function handleMovieDelete(data) {
        setIsSaving(true);
        mainApi.deleteMovie(data)
            .then(() => {
                setSavedMovies((prevMoviesState) => prevMoviesState.filter((deletedmovie) => deletedmovie._id !== data));
                setRememberedMovies((prevMoviesState) => prevMoviesState.filter((deletedmovie) => deletedmovie._id !== data));
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsSaving(false);
            })
    }

    const tokenCheck = React.useCallback(() => {
        mainApi.getUserInfo()
        .then(() => {
          setLoggedIn(true);
          setIsCheckingToken(false)
          })
        .catch((err) => {
          console.log(err);
        });
    }, [setIsCheckingToken])

    React.useEffect(() => {
        tokenCheck()
      }, [tokenCheck])

  return (
    <CurrentUserContext.Provider value={currentUser}>
	    <div className="page">
	    	<Switch>
		    	<Route exact path="/">
			    	<Main loggedIn={loggedIn} />
		    	</Route>
		    	<ProtectedRoute
                    exact 
			    	path="/movies"
			    	component={Movies}
		    		loggedIn={loggedIn}
                    onSearchMovies={searchMovies}
					onShortMoviesCheck={handleShortMoviesCheck}
					isShortMoviesChecked={isShortMoviesChecked}
                    movies={movies}
                    isSearching={isSearching} 
                    isErrorActive={isMoviesErrorActive} 
                    notFound={notFound} 
                    savedMovies={savedMovies}
                    onMovieSave={handleMovieSave}
                    onMovieDelete={handleMovieDelete}
                    isCheckingToken={isCheckingToken}
		    	/>
		    	<ProtectedRoute
                    exact
			    	path="/saved-movies"
			    	component={SavedMovies}
			    	loggedIn={loggedIn}
                    onSearchSavedMovies={searchSavedMovies}
                    onShortMoviesCheck={handleShortMoviesCheck}
                    isShortMoviesChecked={isShortMoviesChecked}
                    isErrorActive={isMoviesErrorActive} 
                    movies={savedMovies}
                    isSearching={isSearching} 
                    notFound={notFound} 
                    savedMovies={savedMovies}
                    onMovieDelete={handleMovieDelete}
                    isCheckingToken={isCheckingToken}
		    	/>
		    	<ProtectedRoute
                    exact
		    		path="/profile"
			    	component={Profile}
                    onUpdateUser={handleUpdateUser}
                    isUpdateSuccess={isUpdateSuccess}
                    isSaving={isSaving}
                    loggedIn={loggedIn}
                    message={editProfileMessage}
					onSignOut={handleSignOut}
                    isCheckingToken={isCheckingToken}
		    	/>
	    		<Route exact path="/signup">
		    		{loggedIn ? <Redirect to="/" /> : <Register 
                        onRegister={handleRegister}
                        onClear={clearAllErrorMessages}
                        isSaving={isSaving}
                        message={registerErrorMessage}
                    />}
		    	</Route>
	    		<Route exact path="/signin">
		    		{loggedIn ? <Redirect to="/" /> : <Login 
						onLogin={handleLogin}
						onClear={clearAllErrorMessages}
						isSaving={isSaving}
                        message={loginErrorMessage}
					/>}
		    	</Route>
		    	<Route path="*">
		    		<NotFound />
		    	</Route>
	    	</Switch>
    	</div>
    </CurrentUserContext.Provider>
  );
}

export default App;