import './Footer.css'

function Footer() {
    return (
        <section className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__nav">
                <p className="footer__copyright">&copy; 2020</p>
                <ul className="footer__links">
                    <li className="footer__links-element">
                        <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__links-element">
                        <a className="footer__link" href="https://github.com" target="_blank" rel="noreferrer">Github</a>
                    </li>
                    <li className="footer__links-element">
                        <a className="footer__link" href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;