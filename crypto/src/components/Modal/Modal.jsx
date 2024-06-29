import React from 'react'
import modal from "../../assets/modal.jpg"
import { ImCross } from "react-icons/im";
import "./Modal.css"
import { useCoin } from '../../context/CoinContext';

const Modal = () => {

    const { handleModal } = useCoin()


    return (

        <div onClick={handleModal} className="modal-container">

            <div className="modal" onClick={(e) => e.stopPropagation()} >

                <div className='modal-img-container' >
                    <img src={modal} alt="" />
                    <div onClick={handleModal} >
                        <ImCross className='cross-icon' />
                    </div>
                </div>

                <div className='modal-paragraph' >
                    <h1>Welcome to the Coinplace</h1>
                    <p>Your all in one cryptocurrency place to find all the information about the coins. </p>
                </div>

            </div>

        </div>

    )
}

export default Modal