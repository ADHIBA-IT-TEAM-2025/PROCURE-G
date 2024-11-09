import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header sticky-top'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <p>
            <i className='fa fa-border-all'></i>  Categories <i className='fa fa-chevron-down'></i>
            </p>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'>Safety</Link>
              </li>
              <li>
                <Link to='/pages'>Electricals</Link>
              </li>
              <li>
                <Link to='/user'>Power Tools</Link>
              </li>
              <li>
                <Link to='/vendor'>Pumps & Motors</Link>
              </li>
              <li>
                <Link to='/track'>Office Stationery & Supplies</Link>
              </li>
              <li>
                <Link to='/contact'>Medical Supplies</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>

        </div>
      </header>
    </>
  )
}

export default Navbar

