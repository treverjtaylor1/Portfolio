import '../App.css';

import { Link } from 'react-router-dom';




const Portfolio = () => {
    return (
        
                <div className="portfolio-wrapper">
                    <div class="uk-flex">
                        <Link to="/">Home</Link>
                        <Link to="/">Proficiencies</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Github</Link>
                        <Link to="/">Contact</Link>
                    </div>
                    <h1 class="uk-heading uk-heading-medium uk-text-bold">Portfolio</h1>
                    
                </div>
           
  
       
    )
}

export default Portfolio;