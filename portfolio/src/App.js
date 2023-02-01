
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from './components/navPage';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Proficiencies from './pages/Proficiencies';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      
      <body>
      
        <div className='body-wrapper'>
            <div className="wrapper">
                <header className='body-header'>
                  <div className='uk-position-center-left'>
                    <ul className='uk-text-center'>
                    <BrowserRouter>
                      <Navbar />
                        <Routes>
                          <Route path='/portfolio' element={<Portfolio />} />
                          <Route path='/proficiencies' element={<Proficiencies />} />
                          <Route path='/about' element={<About />} />
                          <Route path='/contact' element={<Contact />} />
                        </Routes>
                    </BrowserRouter>
                    </ul>
                  </div>
                 
                </header>
                <div className='body-content'>
                
                  
                 
                </div>
            </div>
            <div className="right-image">
            {/* just the right image */}
        
            </div>
        </div>
        <script>
          
        </script>
      </body>
    </div>
  );
}

export default App;
