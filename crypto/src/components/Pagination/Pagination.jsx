import React, { useEffect, useState } from 'react'
import './Pagination.css';


const Pagination = ({ postsPerPage, totalPosts, currentPage, setCurrentPage }) => {

    const totalPages = Math.ceil(totalPosts.length / postsPerPage);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePageClick = (num) => {
        setCurrentPage(num + 1)
    }

    const handlePrevButton = () => {
        setCurrentPage(prev => prev - 1);
    }

    const handleNextButton = () => {
        setCurrentPage(prev => prev + 1);
    }

    return (
        <>

            <div className='pages-container' >
                <button
                    className={currentPage === 1 ? "disabled-btn" : ""}
                    onClick={() => handlePrevButton()}
                    disabled={currentPage === 1} >Prev</button>

                {pages.map((item, index) => (

                    <p
                        onClick={() => handlePageClick(index)}
                        className='page-number'
                        key={index} >{item}

                    </p>

                ))}
                <button
                    className={currentPage === totalPages ? "disabled-btn" : ''}
                    onClick={handleNextButton}
                    disabled={currentPage === totalPages}
                >Next
                </button>
            </div>
        </>
    )
}

export default Pagination