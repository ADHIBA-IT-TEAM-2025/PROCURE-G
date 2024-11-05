import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"
import Categories from "../MainPage/Categories"
import Navbar from "../../common/header/Navbar"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
    <Navbar/>
       <Categories />
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Delas</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
