import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import {useCoin} from "../../context/CoinContext"

const Navbar = () => {

const coin = useCoin()
console.log(coin);

    return (
        <>
            <div className='navbar' >
                <img className='logo' src={logo} alt="" />

                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                </ul>
                
                <div className="nav-right">
                    <select>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="inr">INR</option>
                    </select>
                </div>

            </div>

        </>
    )
}

export default Navbar