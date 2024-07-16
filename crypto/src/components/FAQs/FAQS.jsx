import React, { useState } from 'react'
import { RiArrowUpSLine } from "react-icons/ri";

import './FAQS.css'

const FAQS = () => {

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
        
        setIsOpen(prev => prev.map((item,index) => idx === index ? !item : item = false))

    }

    return (
        <>
            <div className="faqs">

                {cryptoFAQs.map((item, index) => (
                    <div key={index} className="faq">
                        <h3 onClick={() => handleFaqsToggle(index)} >{item.question} <span className={isOpen[index] ? `rotate` : ""} ><RiArrowUpSLine /></span></h3>
                        <p>{isOpen[index] && item.answer}</p>
                    </div>
                ))}

            </div>
        </>
    )
}

export default FAQS