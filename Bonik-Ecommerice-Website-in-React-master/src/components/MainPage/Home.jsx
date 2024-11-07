import React from "react"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home' >
        <div className='container d_flex' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
