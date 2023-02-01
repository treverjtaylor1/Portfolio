import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
  
    
    <div className="body-wrapper">
        <div className="wrapper">
            
              <div className="uk-position-center-left">
                    <nav className="main-menu-desktop">
                      <ul className="uk-text-center">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/portfolio">Projects</Link>
                        </li>
                        <li>
                          <Link to="/proficiencies">Proficiencies</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <a>Github</a>
                        </li>
                        <li>
                          <Link to="/contact">Contact Me</Link>
                        </li>
                      </ul>
                    </nav>  
                    </div>
                </div>
                <div className="right-image">

                  </div>
           
        </div>
     
      
    
  )
  
};

export default Home;