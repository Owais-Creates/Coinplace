import React from 'react'
import './Price.css'
import man from "../../assets/man.png"

const Price = () => {

  const plans = [
    {
      time: "Monthly",
      billing: "₹500 billed monthly",
      price: "₹500",
      month: "month",
      billingYearly: "or billed yearly 250rs/month",
      button: "Upgrade to premium"
    },
    {
      time: "Yearly",
      billing: "₹3000 billed every 12 months",
      price: "₹3000",
      month: "year",
      billingYearly: "₹250 per month",
      button: "Upgrade to premium"
    }
  ];

  return (
    <>
      <div className='main' >

        <div className="top">

          <div className="img">
            <img src={man} alt="" />
          </div>

          <div className="heading">
            <h2>Level up your Crypto Journey -Free- with <span>Coinplace premium</span></h2>
          </div>

        </div>

        <div className="bottom">
          <p className='bottom-heading' >Select your preferred plan</p>
        </div>

        <div className="card-container">

          {plans.map((item, index) => (
            <div className="card">

              <p className='custom-para1'>{item.time}</p>
              <p className='custom-para'>{item.billing}</p>
              <p className='custom1'><span>{item.price}</span> per {item.month}</p>
              <p className='custom2'>{item.billingYearly}</p>
              <div><button className='button' >{item.button}</button></div>

            </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default Price

{/* <div className="card">

<p className='custom-para1'>Monthly</p>
<p className='custom-para'>$10 billed monthly</p>
<p className='custom1'><span>$10</span> per month</p>
<p className='custom2'>or billed yearly $8.32/month</p>
<div><button className='button' >Upgrade to premium</button></div>

</div> */}