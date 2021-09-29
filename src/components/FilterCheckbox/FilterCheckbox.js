import './FilterCheckbox.css';

function FilterCheckbox({ onChange, isChecked, }) {
    return (
        <label className="search__toggle-label">
            <input className="search__toggle" id="short-films" type="checkbox" onChange={onChange} checked={isChecked}/>
            <span className="search__toggle_visible"></span>
        </label>
    )
}

export default FilterCheckbox;