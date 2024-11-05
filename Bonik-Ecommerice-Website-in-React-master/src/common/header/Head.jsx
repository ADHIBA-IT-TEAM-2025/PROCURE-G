import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 99438 94429</label>
            <i className='fa fa-envelope'></i>
            <label> support@procure-g.com</label>
          </div>
          <div className='right row RText'>
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
