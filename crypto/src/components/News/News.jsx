import React, { useEffect, useState } from 'react';
import { useCoin } from '../../context/CoinContext';
import "./News.css";
import { motion } from 'framer-motion';
import Loader from '../Loader/Loader';

const News = () => {
    const { newsData } = useCoin();
    const [lastIndex, setLastIndex] = useState(5);
    const [loading, setLoading] = useState(false);
    const [allDataLoaded, setAllDataLoaded] = useState(false);

    const handleScroll = () => {
        let scrollHeight = document.documentElement.scrollHeight;
        let top = document.documentElement.scrollTop;
        let windowHeight = window.innerHeight;

        if (windowHeight + top >= scrollHeight - 10 && !loading && !allDataLoaded) {
            setLoading(true);
            setLastIndex(prev => {
                const newIndex = prev + 5;
                if (newIndex >= newsData.data?.length) {
                    setAllDataLoaded(true);
                }
                return newIndex;
            });
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (loading) {
            setLoading(false);
        }
    }, [lastIndex]);

    return (
        <>
            <div className="main-parent">
                <motion.h1 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    Stay ahead in <span>Crypto</span> with the freshest updates and insights
                </motion.h1>
                <div className='single-news-container'>
                    {
                        newsData.data?.slice(0, lastIndex).map((item, index) => (
                            <div key={index} className='single-news'>
                                <div className='news-image-container'>
                                    <img className='news-img' src={item.thumbnail} alt="" />
                                </div>
                                <div className='news-details-container'>
                                    <p className='news-title'>{item.title}</p>
                                    <p className='description'>{item.description}</p>
                                    <p className='created-at'>Created at - <span>{item.createdAt}</span></p>
                                    <a target='_blank' href={item.url} rel="noopener noreferrer">Know More</a>
                                </div>
                            </div>
                        ))
                    }


                </div>
                {loading && <Loader />} {/* Show loader when more data is being loaded */}

            </div>
            {allDataLoaded && <p className='end-message'>No more data left to load....</p>}

        </>
    );
}

export default News;
