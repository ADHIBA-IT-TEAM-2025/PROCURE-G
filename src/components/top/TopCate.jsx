import React from "react"
import "./style.css"
import TopCart from "./TopCart"

import Navbar from "../../common/header/Navbar"

const TopCate = () => {
  return (
    <>

      <Navbar />
      <section className='TopCate background'>
        <div className='container'>

          <div className='heading d_flex'>
            <div className='heading-left  d_flex align-items-center'>
              <i className='fa-solid fa-border-all'></i>
              <h2>Top Brands & Related Categories</h2>
            </div>
            <div className='heading-right d_flex align-items-center'>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
