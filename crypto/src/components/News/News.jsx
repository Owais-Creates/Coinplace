import React from 'react';
import { useCoin } from '../../context/CoinContext';
import "./News.css"; // Ensure your CSS file path is correct
import { motion } from 'framer-motion';

const News = () => {
    const { newsData } = useCoin();


    return (
        <>
            <div className="main-parent">
                <motion.h1 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    Stay ahead in <span>Crypto</span> with the freshest updates and insights
                </motion.h1>

                <div className='single-news-container'>
                    {
                        newsData.data?.slice(0, 15).map((item, index) => (
                            <div key={index} className='single-news' >

                                <div className='news-image-container' >
                                     <img className='news-img' src={item.thumbnail} alt="" />
                                </div>

                                <div className='news-details-container' >
                                    <p className='news-title' >{item.title}</p>
                                    <p className='description' >{item.description}</p>
                                    <p className='created-at' >Created at - <span>{item.createdAt}</span></p>
                                    <a target='_blank' href={item.url}>Know More</a>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    );
}

export default News;
