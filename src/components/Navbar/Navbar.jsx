// frontend/components/Navbar/Navbar.jsx

import { NavLink } from "react-router-dom"

export default function Navbar() {

  const closeMenu = () => {
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar.classList.contains('show')) {
      const collapse = window.bootstrap.Collapse.getInstance(navbar)
        || new window.bootstrap.Collapse(navbar);

      collapse.hide();
    }
  };

  return (
          <nav className="navbar w-100 navbar-expand-lg">
            <div className="w-100 d-flex p-0 ps-lg-4 pe-lg-2">

                <button className="nav-toggle d-lg-none" type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" 
                >
                  <span className="navbar-toggler-icon">  <i></i></span> 
                </button>

                <button className="d-lg-none bg-transparent text-gold fw-bold border-0 position-absolute" style={{top: '9px', right: '146px'}}>
                    <NavLink to="/donate" className="nav-link deals-button text-white fw-bold d-flex align-items-center bg-transparent border border-white rounded rounded-2 p-2 h-75" onClick={closeMenu}>
                      Donate 
                    </NavLink>
                </button>
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
                <ul className="navbar-nav w-100 bg-light position-relative mb-2 mb-lg-0 mx-auto pt-1 px-3 pb-3 p-lg-0">
                    
                  <li className="nav-item">
                    <NavLink to="/resources" className="nav-link" onClick={closeMenu}>
                      Resources
                    </NavLink>
                  </li>

                  <li className="nav-item d-none d-lg-flex">
                    <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/events" className="nav-link" onClick={closeMenu}>
                      Events
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/stories" className="nav-link" onClick={closeMenu}>
                      Stories
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/our-sponsors" className="nav-link" onClick={closeMenu}>
                      Our Sponsors
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                      Contact Us
                    </NavLink>
                  </li>

                  <li className="ms-auto">
                    <button className="d-lg-block btn-success fw-bold border-0">
                        <NavLink to="/donate" className="nav-link deals-button text-white fw-bold d-flex align-items-center p-2 h-75" onClick={closeMenu}>
                          Donate 
                        </NavLink>
                    </button>
                  </li>

                </ul>
  
                </div>
            </div>
          </nav>
  )
}
