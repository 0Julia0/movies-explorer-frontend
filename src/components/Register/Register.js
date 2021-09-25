import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
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
            <form className="register__form">
                <fieldset className="register__fields">
                    <p className="register__text">Имя</p>
                    <input className="register__input" type="text" required/>
                    <span className="register__error"></span>
                    <p className="register__text">E-mail</p>
                    <input className="register__input" type="email" required/>
                    <span className="register__error"></span>
                    <p className="register__text">Пароль</p>
                    <input className="register__input" type="password" required minLength="8"/>
                    <span className="register__error">Что-то пошло не так...</span>
                </fieldset>
                <button className="register__button">Зарегистрироваться</button>
            </form>
                <h3 className="register__subtitle">Уже зарегистрированы?
                    <Link className="register__link" to="/signin"> Войти</Link>
                </h3>
        </section>

    )
}

export default Register;