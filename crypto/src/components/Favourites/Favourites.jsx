import React from 'react';
import "./Favourites.css";
import { useCoin } from '../../context/CoinContext';
import { motion } from 'framer-motion';

const Favourites = () => {
    const { singleFavouriteCoin, setSingleFavouriteCoin } = useCoin();

    const handleRemove = (name) => {
        const updatedState = singleFavouriteCoin.filter((item) => item.name !== name);
        setSingleFavouriteCoin(updatedState);
    }

    const clearLocalStorage = () => {
        localStorage.clear();
        setSingleFavouriteCoin([]); // Set to an empty array
    }

    return (
        <div className='favourites-container'>
            <motion.div className='favourites-container-heading'>
                <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Favourites</motion.h1>
                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Your favourite coins are displayed here</motion.p>
            </motion.div>

            <div className='favourite-coins-display-container'>
                {singleFavouriteCoin.length === 0 ? (
                    <h2 className='no-favourites'>No Favourites yet...</h2>
                ) : (
                    singleFavouriteCoin.map((item, index) => (
                        <div key={index} className='favourite-coin'>
                            <h2>{item.name}</h2>
                            <img src={item.img} alt="" />
                            <button onClick={() => handleRemove(item.name)}>Remove</button>
                        </div>
                    ))
                )}
            </div>

            <button className='clear-all-favourites' onClick={clearLocalStorage}>Clear All Favourites</button>
        </div>
    );
}

export default Favourites;
