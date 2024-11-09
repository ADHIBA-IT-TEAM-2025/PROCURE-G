import React, { useState, useEffect } from 'react';
import logo from "../../components/assets/images/procure-g-logo.png"
import { Link } from "react-router-dom"
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
  
const Search = ({ CartItem }) => {
  
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  // click to top
  const [pathLength, setPathLength] = useState(0);
  const [offsetActive, setOffsetActive] = useState(false);

  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path");
    if (progressPath) {
      const length = progressPath.getTotalLength();
      setPathLength(length);

      progressPath.style.transition = "none";
      progressPath.style.strokeDasharray = `${length} ${length}`;
      progressPath.style.strokeDashoffset = `${length}`;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = "stroke-dashoffset 10ms linear";
    }

    const updateProgress = () => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      if (progressPath) {
        progressPath.style.strokeDashoffset = `${progress}`;
      }
    };

    const handleScroll = () => {
      updateProgress();

      if (window.scrollY > 50) {
        setOffsetActive(true);
      } else {
        setOffsetActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathLength]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [active, setActive] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: 'Help',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleMenu = () => setActive(!active);
  const closeMenu = () => setActive(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validateForm = () => {
    let errorMessages = {};
    if (!formValues.name) {
      errorMessages.name = 'Please enter your name';
    }
    if (!formValues.email || !formValues.email.includes('@') || formValues.email.length < 6) {
      errorMessages.email = 'Please enter a valid email';
    }
    if (!formValues.message) {
      errorMessages.message = 'Please enter your message';
    }
    setErrors(errorMessages);
    return Object.keys(errorMessages).length === 0;
  };

  const sendToWhatsApp = () => {
    if (!validateForm()) return;

    const { name, email, subject, message } = formValues;
    const postLink = window.location.href;

    const whatsappMessage = `New message from ${name}\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}\n\n=============================\n*Form:* ${postLink}\n=============================`;

    const phoneNumber = '+917708871117'; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <>

      <section className='search'>
        <div className='container c_flex search-conta'>
          <div className='logo width' >
            <img src={logo} alt='' />
          </div>


          <div class="search-main ">
            <form action="/" method="GET" class="form">
              <input type="search" placeholder="Search Products...." class="search-field" />
              <button type="submit" class="search-button">  <i className="fa fa-search"></i></button>
            </form>
          </div>

          <div className='icon f_flex width align-items-center' style={{fontWeight:"bolder"}}>

            <a className='me-3'>
              <Link to='/vendor'  >OUR BUSINESS</Link>
            </a>
            <a className='me-3' >
              <Link to='/vendor'>+ SELL</Link>
            </a>
            <a className='me-3' >
              <Link to='/vendor'>Track Order</Link>
            </a>
         
            <Tooltip title="Phone" arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-arrow' }}>
              <i className="fa fa-phone icon-circle"></i>
            </Tooltip>
            <Tooltip title="Sign-in" arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-arrow' }}>
              <i className="fa fa-sign-in icon-circle"></i>
            </Tooltip>

            <div className='cart'>
              <Link to='/cart'>
                <Tooltip title="Shopping Cart" arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-arrow' }}>
                  <i className="fa fa-shopping-bag icon-circle"></i>
                </Tooltip>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <div
        className={`progress-wrap ${offsetActive ? "active-progress" : ""}`}
        id="progress-scroll"
        onClick={scrollToTop}
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <div className={`nav-whatsapp ${active ? 'active' : ''}`}>
        <div className='wrapperWA'>
          <div className='wrapperWA-header'>
            <h2>WhatsApp Live Chat</h2>
            <div className='closeWA' onClick={closeMenu}>
              <svg className='h-6 w-6' fill='none' stroke='#f40076' viewBox='0 0 24 24'>
                <path d='M6 18L18 6M6 6l12 12' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'></path>
              </svg>
            </div>
          </div>
          <div className='form-container' id='waform-IT'>
            <div className='formC'>
              <div className='Fcontrol'>
                <input
                  className='cName'
                  id='cName'
                  name='name'
                  required
                  type='text'
                  value={formValues.name}
                  onChange={handleChange}
                />
                <span className='nameC'>Name</span>
                <span className='valid' id='error_name'>{errors.name}</span>
              </div>
              <div className='Fcontrol'>
                <input
                  className='cEmail'
                  id='cEmail'
                  name='email'
                  required
                  type='email'
                  value={formValues.email}
                  onChange={handleChange}
                />
                <span className='emailC'>Email</span>
                <span className='valid' id='error_email'>{errors.email}</span>
              </div>
            </div>
            <div className='formC'>
              <div className='Fcontrol'>
                <select
                  className='cSubject'
                  id='cSubject'
                  name='subject'
                  value={formValues.subject}
                  onChange={handleChange}
                >
                  <option value='Help'>Help</option>
                  <option value='Question'>Question</option>
                  <option value='Request'>Request</option>
                </select>
                <span className='subjectC'>Select Subject</span>
              </div>
              <div className='Fcontrol'>
                <textarea
                  className='cMessage'
                  id='cMessage'
                  name='message'
                  required
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
                <span className='messageC'>Message</span>
                <span className='valid' id='error_message'>{errors.message}</span>
              </div>
            </div>
            <div className='formB'>
              <a className='whatsapp-send' onClick={sendToWhatsApp}>
                <i className="fab fa-whatsapp "></i>
                Send WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className='whatsapp-float' onClick={toggleMenu}>
          <div className='whatsapp-icon'>
            <i className="fab fa-whatsapp "></i>
          </div>
          <span className='whatsapp-text'>Talk to us?</span>
        </div>
      </div>

    </>
  )
}

export default Search
