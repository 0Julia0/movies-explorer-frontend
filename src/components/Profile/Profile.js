import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import {Link} from "react-router-dom";


function Profile(props) {
    const [isFormDisabled, setIsFormDisabled] = React.useState(true);

    function handleEditProfileClick(e) {
        e.preventDefault();
        setIsFormDisabled(false);
    }

    return (
        <>
        <Header loggedIn={props.loggedIn} />
            <section className="profile">
                <h2 className="profile__title">Привет, Юля!</h2>
                <form className="profile__form" >
                    <fieldset className="profile__fields">
                        <div className="profile__input">
                            <p className="profile__input-text">Имя</p>
                            <input className="profile__input-field" type="text" placeholder="Юля" disabled={isFormDisabled}/>
                        </div>
                        <div className="profile__input">
                            <p className="profile__input-text">Email</p>
                            <input className="profile__input-field" type="text" placeholder="Email@email.ru" disabled={isFormDisabled}/>
                        </div>
                    </fieldset>
                    <span className={isFormDisabled ? 'profile__error profile__error_invisible' : 'profile__error'}>При обновлении профиля произошла ошибка.</span>
                    {isFormDisabled ? <button className="profile__button profile__button_type_edit" onClick={handleEditProfileClick}>Редактировать</button> :
                        <button className="profile__button profile__button_type_save">Сохранить</button>}
                </form>
                <Link to="/" className={isFormDisabled ? 'profile__link' : 'profile__link_invisible'}>Выйти из аккаунта</Link>
            </section>
        </>

    )
}

export default Profile;