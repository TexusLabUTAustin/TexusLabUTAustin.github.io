import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerwidth <= 960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  })

  window.addEventListener('resize', showButton);
    
  return (
    <>
    <nav className = "navbar">
        <div className = "navbar-container">
        
         <Link to = "/" className = "navbar-logo" onclick = {closeMobileMenu}>
          
         <img src="/images/jsg_white_digital.png" width= "240" alt="Logo" className="logo-image" />
         </Link>

         <div className = 'menu-icon' onClick = {handleClick}>
          <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
          <li className = 'nav-item'>
            <Link to = '/' className = 'nav-links' onClick= {closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className = 'nav-item'>
            <Link to = '/Graph1' className = 'nav-links' onClick= {closeMobileMenu}>
              Projects
            </Link>
            <ul className="dropdown-content">
                <li className="nav-item">
                  <Link to="/Project1" className="nav-links" onClick={closeMobileMenu}>
                    Project 1
                  </Link>
                  {/* Inner Dropdown for Project 1 */}
                  <ul className="inner-dropdown-content">
                    <li className="nav-item">
                      <Link to="/Project1/Details" className="nav-links" onClick={closeMobileMenu}>
                        Details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Project1/Gallery" className="nav-links" onClick={closeMobileMenu}>
                        Gallery
                      </Link>
                    </li>
                    {/* Add more links for Project 1 as needed */}
                  </ul>
                  
                </li>
                <li className="nav-item">
                  <Link to="/Project2" className="nav-links" onClick={closeMobileMenu}>
                    Project 2
                  </Link>
                </li>
                {/* Add more project links as needed */}
              </ul>
          </li>

          <li className = 'nav-item'>
            <Link to = '/Graph2' className = 'nav-links' onClick= {closeMobileMenu}>
              Research
            </Link>
          </li>

          <li className = 'nav-item'>
            <Link to = '/People' className = 'nav-links' onClick= {closeMobileMenu}>
              People
            </Link>
          </li>

          <li className = 'nav-item'>
            <Link to = '/Graph1' className = 'nav-links' onClick= {closeMobileMenu}>
              Publications
            </Link>

            {/* Nested Dropdown */}
            

            
          </li>

          <li className = 'nav-item'>
            <Link to = '/Graph1' className = 'nav-links' onClick= {closeMobileMenu}>
              Contact
            </Link>
          </li>



        </ul>

        </div>
    
    
    </nav>
    
    </>
  )
}

export default Navbar


