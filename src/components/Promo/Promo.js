import promo from "../../images/promo.svg";
import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <img className="promo__image" alt="Логотип" src={promo}/>
            <div className="promo__group">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a href="#about-project" className="promo__button">Узнать больше</a>
            </div>
        </section>
    )
}

export default Promo;