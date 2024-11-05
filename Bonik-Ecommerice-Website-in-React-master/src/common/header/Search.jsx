import React from "react"
import logo from "../../components/assets/images/procure-g-logo.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 400)
  })
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width' >
            <img src={logo} alt='' />
          </div>

          <main class="main">
            <div class="container" data-container>
              <form class="form">
                <input
                  class="form__input"
                  type="text"
                  placeholder="search your city"
                  autocomplete="off"
                  data-form-input
                />
                <button class="form__btn" data-form-button>
                <i className="fa fa-user "></i>
                </button>
              </form>
            </div>
          </main>

          <div className='icon f_flex width'>
            <i className="fa fa-user icon-circle"></i>
            <i className="fa fa-phone icon-circle"></i>
            <i className="fa fa-sign-in icon-circle"></i>
            <i className="fa fa-globe icon-circle"></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
