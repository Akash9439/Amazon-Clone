import React from 'react'
import './Payment.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link} from 'react-router-dom'
function Payment() {
  const [{user,basket},dispatch]=useStateValue();
  return (
    <div className='payment'>
      <div className="payment__container">
        <h1>
          Checkout(<Link to='/checkout'>{basket.length} items</Link>)
        </h1>
        {/* delivery-address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Silicon Institute of Technology,BBSR</p>
            <p>Odisha,India</p>
          </div>
        </div>
        {/* review and purchase */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items"> 
            {basket.map(items=>(
              <CheckoutProduct
                 id={items.id}
                 title={items.title}
                 image={items.image}
                 price={items.price}
                 rating={items.rating} 
              />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe Code */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment