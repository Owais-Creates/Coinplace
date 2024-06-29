import React, { useEffect, useState } from 'react'
import './Home.css'
import { useCoin } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
import modal from "../../assets/modal.jpg"
import { ImCross } from "react-icons/im";


const Home = () => {

  const { allCoin, currency } = useCoin();
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin)
    }
  }

  const searchHandler = async (e) => {
    e.preventDefault();

    try {
      const coin = await allCoin.filter(item =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setDisplayCoin(coin);


    } catch (error) {
      console.error("Error filtering coins:", error);
    }
  };

  const handleModal = () => {
    setIsModalActive(false)
  }

  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin])

  useEffect(() => {

    setTimeout(() => {
      setIsModalActive(true)
    }, 3000)

  }, [])

  return (
    <>
      {!isModalActive
        ?
        <div className="home">
          <div className="hero">
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>Welcome to the world's largest cyrptocurrency marketplace.</p>

            <form onSubmit={searchHandler} >
              <input
                onChange={(e) => handleInput(e)}
                type="text" placeholder='Search Crypto..' list='coinlist' value={input} required />

              <datalist id='coinlist' >
                {allCoin.map((item, index) => <option key={index} value={item.name} />)}
              </datalist>
              <button type='submit' >Search</button>
            </form>

          </div>

          <div className="crypto-table">
            <div className="table-layout">
              <p>#</p>
              <p>Coins</p>
              <p>Price</p>
              <p className='hour-change' >24H Change</p>
              <p className='market-cap'>Market</p>
            </div>

            {
              displayCoin.slice(0, 50).map((item, index) => (
                <Link to={`/coin/${item.id}`} key={index} className='table-layout' >
                  <p>{item.market_cap_rank}</p>
                  <div>
                    <img src={item.image} alt="" />
                    <p>{item.name + " - " + item.symbol}</p>
                  </div>
                  <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                  <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                    {Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                  <p className='market-cap' >{currency.symbol} {item.market_cap.toLocaleString()}</p>
                </Link>
              ))
            }
          </div>
        </div>

        :
        <div onClick={handleModal} className="modal-container">

          <div className="modal">

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

      }
    </>
  )
}

export default Home

