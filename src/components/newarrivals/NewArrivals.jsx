import React, { useEffect, useState } from "react"
import Cart from "./Cart"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEarListen, faHouse, faLink, faLocationDot, faMoneyBillTransfer, faShareFromSquare, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import procureg from '../assets/images/procure-g-logo.png'
const NewArrivals = () => {



  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <>
      {/* <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section> */}


      {/* <div id="container-login-pro">
        <div id="left">
          <h1 id="welcome">Welcome</h1>
          <div style={{margin:"20px"}}>
            <img src={procureg} alt="logo" className="img-fluid" style={{ height: "60px", width: "fit-content" }} />
          </div>

        </div>
        <div id="right">
          <h1 id="login">LogIn</h1><br />
          <input type="email" id="email" class="client-info" />
          <label for="email">Email</label>
          <input type="password" id="password" class="client-info" />
          <label for="password">Password</label>
          <input type="submit" id="submit" class="client-info" value="Submit" />
          <div className="text-center">
            <a href="#">New user at ProcureG?   <span style={{ textDecoration: "underline", color: "#2f4d2a", fontWeight: "bold" }}> sign up</span></a>
          </div>
          <button class="social" id="facebook">connect with facebook</button>
          <button class="social" id="google">connect with google</button>
        </div>
      </div> */}




      {/* <section className="body-pro-form">
        <div className={`container-fluid ${isActive ? 'active' : ''}`}>
          <div className="form-box login">
            <form action="#">
              <h1>Login</h1>

              <div className="input-box d-flex">
                <div className="input-box me-2">
                  <input type="email" placeholder="First name" required />
                </div>
                <div className="input-box ">
                  <input type="email" placeholder="Last name" required />
                </div>
              </div>

              <div className="input-box">
                <input type="email" placeholder="Email ID" required />
                <i className="fas fa-envelope"></i>
              </div>

              <div className="d-flex">
                <div className="input-box me-2">
                  <input type="email" placeholder="Business name" required />
                </div>
                <div className="input-box ">
                  <input type="email" placeholder="Business email ID" required />
                </div>
              </div>

              <div className="d-flex">
                <div className="input-box me-2">
                  <input type="email" placeholder=" contact number" required />
                </div>
                <div className="input-box ">
                  <input type="email" placeholder=" GST number" required />
                </div>
              </div>

              <div className="input-box">
                <input type="password" placeholder="Business address" required />
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <i className="fas fa-lock"></i>
              </div>

              <div className="input-box">
                <input type="password" placeholder="Confrim password" required />
                <i className="fas fa-lock"></i>
              </div>
              <div className=" d-flex  mb-3">
                <input className="me-2" type="checkbox" />
                <label for="password" class="chekbox-label" style={{ fontSize: "12px" }}>By clicking Sign up, you agree to Procureg's
                  <span style={{ textDecoration: "underline", color: "#2f4d2a", fontWeight: "bold" }}>Terms of conditions</span> and <span>Privacy policy
                  </span></label>
              </div>

              <button type="submit" className="btn">Login</button>

              <div className="forgot-link">
                <a href="#">Already have an account? login</a>
              </div>

            </form>

          </div>

          <div className="form-box register">
            <form action="#">
              <h1>Registration</h1>


              <div className="input-box d-flex">
                <div className="input-box m-2">
                  <input type="email" placeholder="First name" required />
                </div>
                <div className="input-box m-2">
                  <input type="email" placeholder="Last name" required />
                </div>
              </div>


              <div className="input-box">
                <input type="text" placeholder="Email ID" required />
                <i className="fas fa-user"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <i className="fas fa-lock"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Confrim password" required />
                <i className="fas fa-lock"></i>
              </div>
              <div className=" d-flex  mb-3">
                <input className="me-2" type="checkbox" />
                <label for="password" class="chekbox-label" style={{ fontSize: "12px" }}>By clicking Sign up, you agree to Procureg's
                  <span style={{ textDecoration: "underline", color: "#2f4d2a", fontWeight: "bold" }}>Terms of conditions</span> and <span>Privacy policy
                  </span></label>
              </div>
              <button type="submit" className="btn">Register</button>

              <div className="forgot-link">
                <a href="#">Already have an account? login</a>
              </div>

            </form>
          </div>

          <div className="toggle-box">
            <div className="toggle-panel toggle-left">
              <h1>I’m a buyer</h1>
              <p>GET STARTED WITH YOUR PROCUREMENT GLOCALLY?</p>
              <button className="btn register-btn" onClick={handleRegisterClick}>Register</button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>I’m a seller!</h1>
              <p>GET STARTED WITH YOUR PROCUREMENT GLOCALLY?</p>
              <button className="btn login-btn" onClick={handleLoginClick}>Login</button>
            </div>
          </div>
        </div>
      </section> */}

    </>
  )
}

export default NewArrivals
