import React, { useState } from 'react';
import './Price.css';
import man from "../../assets/man.png";
import { RiArrowUpSLine } from "react-icons/ri";
import { motion } from 'framer-motion';

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

  const cryptoFAQs = [
    {
      question: "What is cryptocurrency?",
      answer: "Digital or virtual currency using cryptography for security, often decentralized and based on blockchain technology."
    },
    {
      question: "How does blockchain work?",
      answer: "A distributed ledger recording transactions across a network, ensuring transparency, security, and immutability."
    },
    {
      question: "Most popular cryptocurrencies?",
      answer: "Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Ripple (XRP), and Litecoin (LTC)."
    },
    {
      question: "How can I buy cryptocurrency?",
      answer: "Buy on exchanges like Coinbase or Binance; store in digital wallets, either software-based or hardware devices."
    },
    {
      question: "What are the risks involved ?",
      answer: "High volatility, regulatory uncertainty, cybersecurity threats, and potential for fraud or hacking."
    }
  ];

  const [isOpen, setIsOpen] = useState(Array(cryptoFAQs.length).fill(false));

  const handleFaqsToggle = (idx) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[idx] = !updatedIsOpen[idx]
    setIsOpen(updatedIsOpen);
  }

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

        <div className="faqs">

          {cryptoFAQs.map((item, index) => (
            <div key={index} className="faq">
              <h3 onClick={() => handleFaqsToggle(index)} >{item.question} <span className={isOpen[index] ? `rotate` : ""} ><RiArrowUpSLine /></span></h3>
              <p>{isOpen[index] && item.answer}</p>
            </div>
          ))}

        </div>

      </div>

    </>
  )
}

export default Price

