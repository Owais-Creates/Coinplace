import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import { useCoin } from "../../context/CoinContext"

const Navbar = () => {

    const { setCurrency } = useCoin();

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", Symbol: "$" });
                break;
            }

            case "eur": {
                setCurrency({ name: "eur", Symbol: "Є" });
                break;
            }

            case "inr": {
                setCurrency({ name: "inr", Symbol: "₹ " });
                break;
            }

            default:{
                setCurrency({ name: "usd", Symbol: "$" });
                break;
            }
        }
    }

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
                    <select onChange={(e) => currencyHandler(e)} >
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