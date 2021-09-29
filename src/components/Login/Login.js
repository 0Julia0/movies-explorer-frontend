import React from "react";
import {Link} from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import {useValidation} from "../../hooks/useValidation";

function Login({ 
    onLogin, 
    onClear, 
    isSaving, 
    message, 
}) {
    const {values, handleChange, errors, isValid} = useValidation();
    
    function handleLogin(evt) {
        evt.preventDefault();
        onLogin(values.email, values.password);
        onClear();
    }

    return (
        <section className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src={logo}
                    alt="Логотип"
                />
            </Link>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form" onSubmit={handleLogin}>
                <fieldset className="login__fields">
                    <p className="login__text">E-mail</p>
                    <input 
                        className="login__input" 
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        disabled={isSaving}
                        required/>
                    <span className="login__error">{errors.email}</span>
                    <p className="login__text">Пароль</p>
                    <input 
                        className="login__input" 
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        disabled={isSaving}
                        required 
                        minLength="8"/>
                    <span className="login__error">{errors.password}</span>
                </fieldset>
                <span className={isSaving ? 'login__error login__error_invisible' : 'login__error'}>{message}</span>
                <button 
                    className={isValid  ? 'login__button' : 'login__button login__button_disabled'} 
                    type="submit" 
                    disabled={!isValid}
                >
                    Войти
                </button>
            </form>
                <h3 className="login__subtitle">Ещё не зарегистрированы?
                    <Link 
                        className="login__link" 
                        to="/signup" 
                        onClick={onClear}
                    >
                        Регистрация
                    </Link>
                </h3>
        </section>
    )
}

export default Login;