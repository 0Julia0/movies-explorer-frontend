import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__links">
                <li className="portfolio__links-element">
                    <a
					    className="portfolio__link"
			   			href="https://0julia0.github.io/how-to-learn/"
			    		target="_blank"
			    		rel="noreferrer"
		        	>
			    		Статичный сайт
		        	</a>
	        	</li>
	        	<li className="portfolio__links-element">
		        	<a
		    			className="portfolio__link"
			    		href="https://0julia0.github.io/russian-travel/index.html"
		    			target="_blank"
		    			rel="noreferrer"
		        	>
		    			Адаптивный сайт
		        	</a>
	        	</li>
		        <li className="portfolio__links-element">
		        	<a
		    			className="portfolio__link"
		    			href="https://julia.p.nomoredomains.club/"
		    			target="_blank"
			    		rel="noreferrer"
		        	>
			    		Одностраничное приложение
		        	</a>
	        	</li>
        	</ul>
        </section>
    )
}

export default Portfolio;