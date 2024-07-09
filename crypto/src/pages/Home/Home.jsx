import React, { useEffect, useState } from 'react'
import './Home.css'
import { useCoin } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'
import Pagination from '../../components/Pagination/Pagination'
import { motion } from 'framer-motion'

const Home = () => {
  const { allCoin, currency, setIsModalActive, isModalActive } = useCoin();
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;

  const firstIndex = (currentPage - 1) * postsPerPage;
  const lastIndex = firstIndex + postsPerPage;
  const posts = displayCoin.slice(firstIndex, lastIndex);

  const handleInput = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin)
      setIsSearching(false);
    }
  }

  const searchHandler = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    try {
      const coin = allCoin.filter(item =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setDisplayCoin(coin);
    } catch (error) {
      console.error("Error filtering coins:", error);
    }
  };

  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin])

  useEffect(() => {
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
      setTimeout(() => {
        setIsModalActive(true);
        localStorage.setItem("modalShown", "true");
      }, 2500);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem("modalShown");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
  }, [setIsModalActive]);

  return (
    <>
      {!isModalActive ? (
        <div className="home">
          <div className="hero">

            <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} >Largest <br /> Crypto Marketplace</motion.h1>

            <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Welcome to the world's largest cryptocurrency marketplace.</motion.p>

            <form onSubmit={searchHandler}>
              <input
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Search Crypto.."
                list="coinlist"
                value={input}
                required
              />
              <datalist id="coinlist">
                {allCoin.map((item, index) => (
                  <option key={index} value={item.name} />
                ))}
              </datalist>
              <button type="submit">Search</button>
            </form>
          </div>

          <div className="crypto-table">
            <div className="table-layout">
              <p>#</p>
              <p>Coins</p>
              <p>Price</p>
              <p className="hour-change">24H Change</p>
              <p className="market-cap">Market</p>
            </div>

            {posts.map((item, index) => (
              <Link to={`/coin/${item.id}`} key={index} className="table-layout">
                <p>{item.market_cap_rank}</p>
                <div>
                  <img src={item.image} alt="" />
                  <p>{item.name + " - " + item.symbol}</p>
                </div>
                <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                  {Math.floor(item.price_change_percentage_24h * 100) / 100}
                </p>
                <p className="market-cap">{currency.symbol} {item.market_cap.toLocaleString()}</p>
              </Link>
            ))}
          </div>

          {displayCoin.length < 1
            ?
            <h1>Loading...</h1>
            :
            <div>
              {!isSearching && (
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={displayCoin}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  lastIndex={lastIndex}
                />
              )}
            </div>
          }

        </div>
      ) : (
        <Modal />
      )}
    </>
  );
}

export default Home;
