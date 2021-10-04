import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import {useValidation} from "../../hooks/useValidation";

function Register({
	onRegister,
	onClear,
	isSaving,
	message,
}) {
    const {values, handleChange, errors, isValid} = useValidation();

    function handleRegister(evt) {
        evt.preventDefault();
        onRegister(values.name, values.email, values.password);
        onClear();
      }

    return (
        <section className="register">
            <Link to="/">
                <img
                    className="register__logo"
                    src={logo}
                    alt="Логотип"
                />
            </Link>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form" onSubmit={handleRegister}>
                <fieldset className="register__fields">
                    <p className="register__text">Имя</p>
                    <input 
                        className="register__input" 
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        disabled={isSaving}
                        required
                    />
                    <span className="register__error">{errors.name}</span>
                    <p className="register__text">E-mail</p>
                    <input 
                        className="register__input" 
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        disabled={isSaving}
                        required
                    />
                    <span className="register__error">{errors.email}</span>
                    <p className="register__text">Пароль</p>
                    <input 
                        className="register__input" 
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        disabled={isSaving}
                        required 
                        minLength="8"
                    />
                    <span className="register__error">{errors.password}</span>
                </fieldset>
                <span className={isSaving ? 'register__error register__error_invisible' : 'register__error'}>{message}</span>
                <button 
                    className={isValid  ? 'register__button' : 'register__button register__button_disabled'}
                    type="submit" 
                    disabled={!isValid}
                >
                    Зарегистрироваться
                </button>
            </form>
                <h3 className="register__subtitle">Уже зарегистрированы?
                    <Link 
                        className="register__link" 
                        to="/signin"  
                        onClick={onClear}
                    > 
                        Войти
                    </Link>
                </h3>
        </section>

    )
}

export default Register;