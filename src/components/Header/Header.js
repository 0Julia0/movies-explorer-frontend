import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import './Header.css'
import { Link } from "react-router-dom";

function Header({ main, loggedIn, }) {
    return (
        <section className={main ? 'header' : 'header header_loggedIn'}>
            <Link to="/">
                <img
                    className="header__logo"
                    src={logo}
                    alt="Логотип"
                />
            </Link>
            <Navigation loggedIn={loggedIn}/>
        </section>
    )
}

export default Header;