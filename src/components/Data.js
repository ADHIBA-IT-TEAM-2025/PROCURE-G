const Data = {
  productItems: [
    {
      id: 1,
      discount: 50,
      cover: "./images/flash/flash-1.png",
      name: "Shoes",
      price: 100,
    },
    {
      id: 2,
      discount: 40,
      cover: "./images/flash/flash-2.png",
      name: "Watch",
      price: 20,
    },
    {
      id: 3,
      discount: 40,
      cover: "./images/flash/flash-3.png",
      name: "Smart Mobile Black",
      price: 200,
    },
    {
      id: 4,
      discount: 40,
      cover: "./images/flash/flash-4.png",
      name: "Smart Watch Black",
      price: 50,
    },
    {
      id: 5,
      discount: 50,
      cover: "./images/flash/flash-1.png",
      name: "Shoes",
      price: 100,
    },
    {
      id: 6,
      discount: 50,
      cover: "./images/flash/flash-3.png",
      name: "Shoes",
      price: 100,
    },
  ],
}
export default Data;


// import React, { useState, useEffect, useRef } from 'react';
// import "./style.css"

// const Cart = ({ CartItem, addToCart, decreaseQty }) => {

//   const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

//   const [imgId, setImgId] = useState(1);
//   const imgShowcaseRef = useRef(null);

//   const slideImage = () => {
//     const displayWidth = imgShowcaseRef.current.querySelector('img').clientWidth;
//     imgShowcaseRef.current.style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
//   };

//   useEffect(() => {
//     window.addEventListener('resize', slideImage);
//     slideImage();

//     return () => {
//       window.removeEventListener('resize', slideImage);
//     };
//   }, [imgId]);

//   return (
//     <>
//       <section className='cart-items'>
//         <div className='container d_flex'>

//           <div className='cart-details'>
//             {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

//             {CartItem.map((item) => {
//               const productQty = item.price * item.qty

//               return (
//                 <div className="card-wrapper" key={item.id}>
//                   <div className="card">
//                     {/* Card left */}
//                     <div className="product-imgs">
//                       <div className="img-display">
//                         <div className="img-showcase" ref={imgShowcaseRef}>
//                           <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
//                           <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
//                           <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
//                           <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
//                         </div>
//                       </div>
//                       <div className="img-select">
//                         {[1, 2, 3, 4].map((id) => (
//                           <div className="img-item" key={id}>
//                             <a href="#" onClick={(e) => { e.preventDefault(); setImgId(id); }} data-id={id}>
//                               <img src={item.cover} alt="shoe image" />
//                             </a>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Card right */}
//                     <div className="product-content">
//                       <h2 className="product-title">{item.name}</h2>
//                       <div className="product-rating">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star-half-alt"></i>
//                         <span>4.7 (21)</span>
//                       </div>

//                       <div className="product-price">
//                       <h4>
//                       ${item.price}.00 * {item.qty}
//                       <span>${productQty}.00</span>
//                     </h4>
//                         <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
//                       </div>

//                       <div className="product-detail">
//                         <h2>About this item:</h2>
//                         <ul>
//                           <li>Color: <span>Black</span></li>
//                           <li>Available: <span>In stock</span></li>
//                           <li>Category: <span>Shoes</span></li>
//                           <li>Shipping Area: <span>All over the world</span></li>
//                           <li>Shipping Fee: <span>Free</span></li>
//                         </ul>
//                       </div>

//                       <div className='cartControl d_flex'>
//                       <button className='incCart' onClick={() => addToCart(item)}>
//                         <i className='fa-solid fa-plus'></i>
//                       </button>
//                       <button className='desCart' onClick={() => decreaseQty(item)}>
//                         <i className='fa-solid fa-minus'></i>
//                       </button>
//                     </div>


//                       <div className="purchase-info">
//                         <input type="number" min="0" defaultValue="1" />
//                         <button type="button" className="btn">
//                           <i className="fas fa-shopping-cart"></i> BUY NOW
//                         </button>

//                       </div>

//                       <div className="social-links">
//                         <p>Share At:</p>
//                         <a href="#"><i className="fab fa-facebook-f"></i></a>
//                         <a href="#"><i className="fab fa-twitter"></i></a>
//                         <a href="#"><i className="fab fa-instagram"></i></a>
//                         <a href="#"><i className="fab fa-whatsapp"></i></a>
//                         <a href="#"><i className="fab fa-pinterest"></i></a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}

//           </div>

//           <div className='cart-total product'>
//             <h2>Cart Summary</h2>
//             <div className=' d_flex'>
//               <h4>Total Price :</h4>
//               <h3>${totalPrice}.00</h3>
//             </div>
//           </div>

//         </div>
//       </section>

//     </>
//   )
// }

// // export default Cart

