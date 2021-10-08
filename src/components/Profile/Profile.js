import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useValidation} from "../../hooks/useValidation";
import validator from "validator";

function Profile({
	onUpdateUser,
	isUpdateSuccess,
	isSaving,
	loggedIn,
    message,
    onSignOut
}) {
    const {values, setValues, handleChange, errors, isValid, setIsValid} = useValidation();
    const [isFormDisabled, setIsFormDisabled] = React.useState(true);
    const currentUser = React.useContext(CurrentUserContext);
    
    React.useEffect(() => {
        setValues(currentUser);
      }, [currentUser, setValues]);

      function handleSubmit(evt) {
        evt.preventDefault();
        if(validator.isEmail) {
            onUpdateUser(values.name, values.email);
        }
      }

    function handleEditProfileClick(evt) {
        evt.preventDefault();
        setIsFormDisabled(false);
    }

    React.useEffect(() => {
        setIsFormDisabled(isUpdateSuccess);
    },[isUpdateSuccess, onUpdateUser])

    React.useEffect(() => {
        if(isSaving) {
            setIsFormDisabled(true);
        }
    }, [isSaving])

    React.useEffect(() => {
        if (
          currentUser.name === values.name &&
          currentUser.email === values.email
        ) {
          setIsValid(false);
          setIsFormDisabled(true)
        }
      }, [setIsValid, values, currentUser]);

    return (
        <>
        <Header loggedIn={loggedIn} main={false}/>
            <section className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <fieldset className="profile__fields">
                        <div className="profile__input">
                            <p className="profile__input-text">Имя</p>
                            <input 
                                className="profile__input-field"
                                type="text"
                                name="name"
                                value={values.name}
                                placeholder="Юля"
                                onChange={handleChange}
                                disabled={isFormDisabled}
                                required
                            />
                        </div>
                        <span className="profile__error">{errors.name}</span>
                        <div className="profile__input">
                            <p className="profile__input-text">Email</p>
                            <input 
                                className="profile__input-field" 
                                type="email"
                                name="email"
                                value={values.email}
                                placeholder="Email@email.ru"
                                onChange={handleChange}
                                disabled={isFormDisabled}
                                required
                            />
                        </div>
                        <span className="profile__error">{errors.email}</span>
                    </fieldset>
                    <span className={'profile__error'}>{message}</span>
                    {isFormDisabled ? <button className="profile__button profile__button_type_edit" onClick={handleEditProfileClick}>Редактировать</button> :
                        <button 
                            className={isValid ? 'profile__button profile__button_type_save' : 'profile__button profile__button_type_save_disabled'} 
                            type="submit" 
                            disabled={!isValid}
                        >
                            Сохранить
                        </button>}
                </form>
                <button 
                    className={isFormDisabled ? 'profile__link' : 'profile__link_invisible'}
                    onClick={onSignOut}
                >
                    Выйти из аккаунта
                </button>
            </section>
        </>

    )
}

export default Profile;