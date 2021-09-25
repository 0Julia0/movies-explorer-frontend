import './SearchForm.css';
import search_icon from '../../images/search_icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <img className="search__form-icon" src={search_icon} alt="Поиск"/>
                <fieldset className="search__form-field">
                    <input type="text" placeholder="Фильм" className="search__form-input" required/>
                </fieldset>
                <button className="search__form-button" type="submit"></button>
                <div className="search__toggle-box">
                    <FilterCheckbox />
                    <h3 className="search__toggle-text">Короткометражки</h3>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;