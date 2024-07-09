import React, { useEffect, useState } from 'react'
import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, currentPage, setCurrentPage }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [pageNumber, setPageNumber] = useState("");
    const [error, setError] = useState("");

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);

        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

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

    const handleJumpToPage = () => {

        const val = pageNumber;

        if (isNaN(val) || val === "") {
            setError("Please enter a valid number");
            return;

        } else if (val < 1 || val > totalPages) {

            setError(`Please enter a value in between 1 and ${totalPages} `);
            return;

        } else {
            setCurrentPage(parseInt(val))
            setError("");
            setPageNumber("")
        }

    }

    return (
        <>

            <div className='pages-container' >

                <div className='main-pages' >
                    <button
                        className={currentPage === 1 ? "disabled-btn" : ""}
                        onClick={() => handlePrevButton()}
                        disabled={currentPage === 1} >
                        {screenWidth > 600 ? "prev" : "<<"}
                    </button>

                    {pages.map((item, index) => (

                        <p
                            onClick={() => handlePageClick(index)}
                            className={`page-number ${currentPage === item ? "page-active" : ""} `}
                            key={index} >{item}

                        </p>

                    ))}
                    <button
                        className={currentPage === totalPages ? "disabled-btn" : ''}
                        onClick={handleNextButton}
                        disabled={currentPage === totalPages}>
                        {screenWidth > 600 ? "next" : ">>"}
                    </button>
                </div>

                <div className='jump-to-page-container' >
                    <input
                        onChange={(e) => {
                            setPageNumber(e.target.value);
                            setError("");
                        }}
                        value={pageNumber}
                        className='jump-to-page-input' type="text" placeholder='Page No.' />

                    <p className='page-error' >{error}</p>
                    <button onClick={handleJumpToPage} >Jump...</button>
                </div>

            </div>

        </>
    )
}

export default Pagination