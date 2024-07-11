import React from 'react';
import "./Favourites.css";
import img from "../../assets/logo.png"

const Favourites = () => {

    const arr = [
        {
            name: "Bitcoin",
            image: img
        }
        
    ]

    return (

        <>
            <div className='favourites-container' >

                <div className='favourites-container-heading' >
                    <h1>Favourites</h1>
                    <p>Your favourite coins are displayed here</p>
                </div>

                <div className='favourite-coins-display-container' >

                    {arr.map((item, index) => (
                        <div key={index} className='favourite-coin' >
                            <h2>{item.name}</h2>
                            <img src={item.image} alt="" />
                            <button>Remove</button>
                        </div>
                    ))}

                </div>

            </div>
        </>

    )
}

export default Favourites