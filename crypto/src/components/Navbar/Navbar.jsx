import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import ham from "../../assets/ham.webp"
import { useCoin } from "../../context/CoinContext"
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {

    const { setCurrency } = useCoin();
    const [show, setShow] = useState(false);

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }

            case "eur": {
                setCurrency({ name: "eur", symbol: "Є" });
                break;
            }

            case "inr": {
                setCurrency({ name: "inr", symbol: "₹ " });
                break;
            }

            default: {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
        }
    }

    return (
        <>
            <div className='navbar' >

                <img onClick={() => setShow(prev => !prev)} className='ham' src={ham} alt="" />

                {show
                    &&
                    <div className="mobile-menu">
                        <Link className='mobile-home' to={"/"} ><li>Home</li></Link>
                        <Link to={"/features"} ><li >Features</li></Link>
                        <Link to={"/pricing"} ><li>Pricing</li></Link>
                    </div>}

                <Link to={"/"} >
                    <img className='logo' src={logo} alt="logo" />
                </Link>

                <ul>
                    <NavLink className="mouse-over" to={"/"} ><li>Home</li></NavLink>
                    <NavLink className="mouse-over" to={"/features"} ><li >Features</li></NavLink>
                    <NavLink className="mouse-over" to={"/pricing"} ><li>Pricing</li></NavLink>

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