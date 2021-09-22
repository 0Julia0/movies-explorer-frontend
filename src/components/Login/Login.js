import "./Login.css";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Login() {
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
            <form className="login__form">
                <fieldset className="login__fields">
                    <p className="login__text">E-mail</p>
                    <input className="login__input" type="email" required/>
                    <span className="login__error"></span>
                    <p className="login__text">Пароль</p>
                    <input className="login__input" type="password" required minLength="8"/>
                    <span className="login__error"></span>
                </fieldset>
                <button className="login__button">Войти</button>
            </form>
                <h3 className="login__subtitle">Ещё не зарегистрированы?
                    <Link className="login__link" to="/signup">Регистрация</Link></h3>
        </section>
    )
}

export default Login;