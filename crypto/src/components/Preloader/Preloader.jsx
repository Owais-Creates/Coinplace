import React, { useEffect } from 'react'
import { preLoaderAnim } from '../../Animation'
import './Preloader.css'

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])

    return (

        <div className="preloader">

            <div className="texts-container">
                <span>Cryptocurrency</span>
                <span>News</span>
                <span>Information</span>
            </div>

        </div>

    )
}

export default Preloader
