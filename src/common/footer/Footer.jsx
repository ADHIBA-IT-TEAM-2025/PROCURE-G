import React from "react"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEarListen, faHouse, faLink, faLocationDot, faMoneyBillTransfer, faShareFromSquare, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import pay1 from '../footer/FOOTER/AMERICANEXPRESS.jpeg'
import pay2 from '../footer/FOOTER/VISA.jpeg'
import pay4 from '../footer/FOOTER/MASTERCARD.jpeg'
import pay5 from '../footer/FOOTER/RUPAY.jpeg'
import pay6 from '../footer/FOOTER/NETBANKING.jpeg'
import { faFacebook, faInstagram, faInternetExplorer, faLinkedin, faTwitter, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>

      <section className="Footer-ist">
        <footer class="padding_4x">
          <div class="flex">
            <section class="flex-content padding_1x">
              <h3><FontAwesomeIcon icon={faLink} style={{ color: "#8c8c8c" }} />&nbsp;&nbsp;&nbsp;QUICK LINKS</h3>
              <hr style={{ height: "1px", width: "90%", background: "#8c8c8c", outline: "none", border: "none" }} />
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Quotation Request</a>
              <a href="#">Sitemap</a>
              <a href="#">Track Order</a>
              <a href="#">Shipping Policy</a>
              <a href="#">PROCURE-G Membership</a>
              <a href="#">Healthcare Disclaimer</a>
            </section>
            <section class="flex-content padding_1x">
              <h3><FontAwesomeIcon icon={faHouse} style={{ color: "#8c8c8c" }} />&nbsp;&nbsp;&nbsp;PROCURE-G</h3>
              <hr style={{ height: "1px", width: "90%", background: "#8c8c8c", outline: "none", border: "none" }} />
              <a href="#">Download App</a>
              <a href="#">Brands List</a>
              <a href="#">Customer Reviews</a>
              <a href="#">Return Policy</a>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
              <a href="#">About PROCURE-G</a>
              <a href="#">PROCURE-G Affiliates</a>
            </section>
            <section class="flex-content padding_1x">
              <h3><FontAwesomeIcon icon={faShippingFast} style={{ color: "#8c8c8c" }} />&nbsp;&nbsp;&nbsp;SHIPPING</h3>
              <hr style={{ height: "1px", width: "90%", background: "#8c8c8c", outline: "none", border: "none" }} />

              <div style={{ display: "flex" }}>
                <div><FontAwesomeIcon icon={faInternetExplorer} style={{ fontSize: "18px" }} /></div>
                <div className="ms-4"> <p>Express Shipping<br />
                  Fast Delivery</p></div>
              </div>

              <div style={{ display: "flex" }}>
                <div><FontAwesomeIcon icon={faCalendarDays} style={{ color: "#8c8c8c" }} /></div>
                <div className="ms-4"> <p>
                  Standard Shipping<br />
                  10+ Business Days</p>
                </div>
              </div>

            </section>
            <section class="flex-content padding_1x">
              <h3><FontAwesomeIcon icon={faLocationDot} style={{ color: "#8c8c8c" }} />&nbsp;&nbsp;&nbsp;CITIES COVERED</h3>
              <hr style={{ height: "1px", width: "90%", background: "#8c8c8c", outline: "none", border: "none" }} />
              <a href="#">Mumbai</a>
              <a href="#">Delhi</a>
              <a href="#">Bangalore</a>
              <a href="#">Hyderabad</a>
              <a href="#">Ahmedabad</a>
              <a href="#">Chennai</a>
              <a href="#">Kolkata</a>
              <a href="#">Surat</a>
            </section>
            <section class="flex-content padding_1x">
              <h3><FontAwesomeIcon icon={faEarListen} style={{ color: "#8c8c8c" }} />&nbsp;&nbsp;&nbsp;24/7 Support</h3>
              <hr style={{ height: "1px", width: "90%", background: "#8c8c8c", outline: "none", border: "none" }} />

              <div class="card-ist">
                <div class="card-body-ist">
                  <p class="card-subtitle-ist mb-2">24/7 Customer Support</p>
                  <p class="card-text-ist">Get your texts/emails answered in your native language</p>
                </div>
              </div>
              <div className=" mt-2 mb-2">
                <span className="text-dark" style={{ fontSize: "17px", color: "#2f4d2a" }}>Customer Services</span>
                <p className="mt-1 mb-1">+91 99438 94429</p>
              </div>
              <div className=" mt-2 mb-2">
                <p className="mt-1 mb-1"> 
                <label> support@procure-g.com</label></p>
              </div>

            </section>
          </div>
          <div class="flex">
            <section class="flex-content padding_1x ">
              <h3><FontAwesomeIcon icon={faMoneyBillTransfer} style={{ color: "#8c8c8c" }} />&nbsp;&nbsp;&nbsp;PAYMENTS</h3>
              <hr style={{ height: "2px", width: "93%", background: "#8c8c8c", outline: "none", border: "none" }} />

              <div className="d-flex">

                <div className="" >
                  <img src={pay1} className="img-fluid" />
                  <p className="text-center" style={{fontSize:"12px"}}>Paypal</p>
                </div>
                <div className="ms-4">
                  <img src={pay2} className="img-fluid " />
                  <p className="text-center" style={{fontSize:"12px"}}>Visa</p>
                </div>
                <div className="ms-4">
                  <img src={pay4} className="img-fluid" />
                  <p className="text-center" style={{fontSize:"12px"}}>Mastercard</p>
                </div>
                <div className="ms-4">
                  <img src={pay5} className="img-fluid" />
                  <p className="text-center" style={{fontSize:"12px"}}>Rupay</p>
                </div>
                <div className="ms-4">
                  <img src={pay6} className="img-fluid" />
                  <p className="text-center" style={{fontSize:"12px"}}>Net Banking</p>
                </div>

              </div>

            </section>
            <section class="flex-content padding_1x text-center" >
              <p>Copyright ©2023 All rights reserved || PROCURE-G</p>
            </section>
            <section class="flex-content padding_1x">
            <h3><FontAwesomeIcon icon={faShareFromSquare} style={{ color: "#8c8c8c" }} />&nbsp;&nbsp;&nbsp;SOCIAL MEDIA</h3>
              <hr style={{ height: "2px", width: "93%", background: "#8c8c8c", outline: "none", border: "none" }} />

              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>

            </section>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer;