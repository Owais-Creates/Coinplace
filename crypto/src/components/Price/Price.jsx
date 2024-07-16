import React, { useState } from 'react';
import './Price.css';
import man from "../../assets/man.png";
import { motion } from 'framer-motion';
import FAQS from '../FAQs/FAQS';

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

          <motion.div
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="img">
            <img src={man} alt="image" />
          </motion.div>

          <div className="heading">
            <motion.h2
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            >Level up your Crypto Journey with <span>Coinplace premium</span></motion.h2>
          </div>

        </div>

        <div className="bottom">
          <p className='bottom-heading' >Select your preferred plan</p>
        </div>

        <div className="card-container">

          {plans.map((item, index) => (
            <div key={index} className="card">

              <p className='custom-para1'>{item.time}</p>
              <p className='custom-para'>{item.billing}</p>
              <p className='custom1'><span>{item.price}</span> per {item.month}</p>
              <p className='custom2'>{item.billingYearly}</p>
              <div onClick={() => alert("coming soon...")} ><button className='button' >{item.button}</button></div>

            </div>
          ))}

        </div>

        <h2 className='faq-h2' >Frequently Asked Questions?</h2>

        <FAQS />

      </div>

    </>
  )
}

export default Price

