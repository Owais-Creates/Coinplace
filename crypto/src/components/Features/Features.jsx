import React from 'react';
import "./Features.css";
import { motion } from 'framer-motion';

const Features = () => {


  const features = {
    "API Integration": "Fetches and displays real-time cryptocurrency details using the CoinGecko API.",
    "Routing": "Routes to specific coin detail pages and Navlinks providing in-depth information.",
    "Search": "Allows users to search for specific cryptocurrencies easily.",
    "Price Tracking": "Provides up-to-date price information for various cryptocurrencies.",
    "User-Friendly": "Designed with a clean and intuitive UI for seamless navigation and usage.",
    "Currency Switching": "Allows changing the currency between USD, INR, Euro across the application.",
    "Pagination": "Allows you to navigate through the whole list of coins accordingly.",
    "Jump To Page": "Added a direct jump to page functionality with error handling for out of bounds inputs.",
    "Add To Favourites": "Implemented an add to favourite functionality for cryptocurrencies allowing users to easily mark their favorite coins and revisit them later..",
    "Local Storage": " Used local storage functionality to ensure your favorite crypto coins persist even if you close your browser. Plus, also ensured that you can add each coin just once, enhancing your experience.",
    "News Section": "Added a news section in cryptocurrency app, enhancing it with infinite scrolling functionality. This feature allows users to seamlessly load more news articles as they scroll down the page, providing a smooth and continuous browsing experience."
  };

  console.log(Object.keys(features));

  return (

    <>
      <div className="feature-main">

        <motion.h1
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        >Welcome to the features of this project</motion.h1>

        <div className='feature-container' >
          {Object.keys(features).map((key, index) => (
            <p className='feature' key={index} ><span className='dot' ></span><strong>{key}:</strong>&nbsp;&nbsp;{features[key]}</p>
          ))}
        </div>

      </div>

    </>

  )
}

export default Features