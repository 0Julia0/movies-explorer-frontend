import './SearchForm.css';
import search_icon from '../../images/search_icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";

function SearchForm({
	onSearchSavedMovies,
	onSearchMovies,
	saved,
	onShortMoviesCheck,
    isChecked,
}) {
    const [search, setSearch] = React.useState('');
    const [isSearchValid, setIsSearchValid] = React.useState(true);

    function handleSearchChange(evt) {
        setSearch(evt.target.value);
        setIsSearchValid(evt.target.checkValidity());
    }

    function handleSearchSavedMovies(evt) {
        evt.preventDefault();
        onSearchSavedMovies(search);
    }

    function handleSearchMovies(evt) {
        evt.preventDefault();
        onSearchMovies(search);
    }

    return (
        <section className="search">
           <form
                className="search__form"
                onSubmit={saved ? handleSearchSavedMovies : handleSearchMovies}
            >
                <img className="search__form-icon" src={search_icon} alt="Поиск" />
                <fieldset className="search__form-field">
                   <input
                        className="search__form-input"
                        type="text"
                        name="search"
                        placeholder="Фильм"
                        value={search}
                        onChange={handleSearchChange}
                        required
                    />
                    <span
	                    className={isSearchValid ? 'search__form-error search__form-error_invisible' : 'search__form-error'}
                    >
                    	Нужно ввести ключевое слово
                    </span>
                </fieldset>
                <button className="search__form-button" type="submit"></button>
                <div className="search__toggle-box">
                    <FilterCheckbox
                        onChange={onShortMoviesCheck}
                        isChecked={isChecked}
                    />
                    <h3 className="search__toggle-text">Короткометражки</h3>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;