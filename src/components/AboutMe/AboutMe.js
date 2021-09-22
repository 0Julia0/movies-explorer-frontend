import photo from '../../images/photo.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__heading">Студент</h2>
            <div className="about-me__description">
                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Юля</h3>
                    <p className="about-me__description-subtitle">Фронтенд-разработчик, 23 года</p>
                    <p className="about-me__description-paragraph">Я живу в Минске. Увлекаюсь музыкой. В свободное время играю на клавишах в группе.
                                                                    На данный момент занимаюсь своим развитием в сфере прогаммирования.
                                                                    После окончания Яндекс Практикума буду готоваиться к поиску работы.</p>
                    <a className="about-me__description-link" href="https://github.com/0Julia0" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="about-me__description-photo" src={photo} alt="Юля"/>
            </div>
        </section>
    )
}

export default AboutMe;