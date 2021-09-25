import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <label className="search__toggle-label">
            <input className="search__toggle" id="short-films" type="checkbox"/>
            <span className="search__toggle_visible"></span>
        </label>
    )
}

export default FilterCheckbox;