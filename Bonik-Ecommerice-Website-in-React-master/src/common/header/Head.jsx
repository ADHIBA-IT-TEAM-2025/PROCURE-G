import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container ' style={{display:"flex",justifyContent:"space-between"}}>
          <div className='d-flex '>
            <i className='fa fa-phone'></i>
            <label> +91 99438 94429</label>
            <i className='fa fa-envelope'></i>
            <label> support@procure-g.com</label>
          </div>
          <div className='d-flex right  RText'>
            <label>Bulk Enquiry</label>
            <label>Need Help?</label>
            {/* <span>🏳️‍⚧️</span>
            <label>EN</label> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
