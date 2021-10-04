import {Link} from "react-router-dom";
import './Navigation.css';
import React from "react";

function Navigation({ loggedIn }) {
    const [isMenuShown, setIsMenuShown] = React.useState(false);

    function handleCloseMenuButtonClick() {
        setIsMenuShown(false);
    }

    function handleOpenMenuButtonClick() {
        setIsMenuShown(true);
    }

    return (
        <div className='header__navigation'>
            <div className={loggedIn ? 'header__navigation-login_invisible' : 'header__navigation-login'}>
                <Link to="/signup" className='header__link header__link_type_register'>Регистрация</Link>
                <Link to="/signin" className='header__link header__link_type_register_button'>Войти</Link>
            </div>
            <div className={loggedIn ? 'header__navigation-movies' : 'header__navigation-movies_invisible'}>
                <Link to="/movies" className="header__link header__link_type_movies">Фильмы</Link>
                <Link to="/saved-movies" className="header__link header__link_type_movies">Сохранённые фильмы</Link>
                <Link to="/profile" className="header__link header__link_type_movies_button">Аккаунт</Link>
            </div>
            <button className={loggedIn ? 'header__menu-button' : 'header__menu-button_invisible'} onClick={handleOpenMenuButtonClick}></button>
            <div className={isMenuShown ? 'header__menu' : 'header__menu_invisible'}>
                <button className="header__menu-close-button" onClick={handleCloseMenuButtonClick}></button>
                <div className='header__menu-container'>
                    <div className="header__menu-links">
                        <Link to="/" className="header__menu-link">Главная</Link>
                        <Link to="/movies" className="header__menu-link">Фильмы</Link>
                        <Link to="/saved-movies" className="header__menu-link">Сохранённые фильмы</Link>
                        <Link to="/profile" className="header__menu-link header__menu-link_type_account">Аккаунт</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;