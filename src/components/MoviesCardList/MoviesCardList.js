import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return (
        <section className="movies">
            <ul className="movies__list">
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
            </ul>
            <button className={props.saved ? 'movies__button movies__button_invisible' : 'movies__button'}>Еще</button>
        </section>
    )
}

export default MoviesCardList;