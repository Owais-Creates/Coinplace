import React from 'react'
import "./Features.css"

const Features = () => {


    const features = {
      "API Integration": "Fetches and displays real-time cryptocurrency details using the CoinGecko API.",
      "Routing": "Routes to specific coin detail pages and Navlinks providing in-depth information.",
      "Search": "Allows users to search for specific cryptocurrencies easily.",
      "Price Tracking": "Provides up-to-date price information for various cryptocurrencies.",
      "User-Friendly Interface": "Designed with a clean and intuitive UI for seamless navigation and usage.",
      "Currency Switching": "Allows changing the currency between USD, INR, Euro across the application.",
    };

console.log(Object.keys(features));

  return (

    <>
      <div className="feature-main">

        <h1>Welcome to the features of this project</h1>

        <div className='feature-container' >
          {Object.keys(features).map((key,index) => (
            <p className='feature' key={index} ><span className='dot' ></span><strong>{key}:</strong>&nbsp;&nbsp;{features[key]}</p>
          ))}
        </div>

      </div>

    </>

  )
}

export default Features