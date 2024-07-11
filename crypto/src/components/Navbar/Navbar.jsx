import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import ham from "../../assets/ham.webp";
import { useCoin } from "../../context/CoinContext";
import { NavLink, Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion'


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

    const mobileMenuHandler = () => {
        setShow(prev => !prev)
    }

    return (
        <>
            <div className='navbar' >

                <img onClick={mobileMenuHandler} className='ham' src={ham} alt="" />

                {show
                    &&
                    <motion.div
                        initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="mobile-menu">
                        <div className='mobile-links' >
                            <Link onClick={mobileMenuHandler} className='mobile-home' to={"/"} ><li>Home</li></Link>
                            <Link onClick={mobileMenuHandler} to={"/features"} ><li >Features</li></Link>
                            <Link onClick={mobileMenuHandler} to={"/pricing"} ><li>Pricing</li></Link>
                        </div>
                    </motion.div>}

                <Link to={"/"} >
                    <img className='logo' src={logo} alt="logo" />
                </Link>

                <ul>
                    <NavLink className="mouse-over" to={"/"} ><li>Home</li></NavLink>
                    <NavLink className="mouse-over" to={"/features"} ><li >Features</li></NavLink>
                    <NavLink className="mouse-over" to={"/pricing"} ><li>Pricing</li></NavLink>
                    <NavLink className="mouse-over" to={"/favourites"} ><li>Favourites</li></NavLink>

                </ul>

                <div className="nav-right">
                    <select onChange={(e) => currencyHandler(e)} >
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="inr">INR</option>
                    </select>
                    <Link to={"/signup"} ><button className='sign-up-btn' >Sign up <span className='sign-up-btn-icon' ><MdArrowOutward /></span> </button></Link>
                </div>

            </div>

        </>
    )
}

export default Navbar