import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import './Header.css'
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <section className={props.loggedIn ? 'header header_loggedIn' : 'header'}>
            <Link to="/">
                <img
                    className="header__logo"
                    src={logo}
                    alt="Логотип"
                />
            </Link>
            <Navigation loggedIn={props.loggedIn}/>
        </section>
    )
}

export default Header;