import React, { useEffect, useState } from 'react'
import './Home.css'
import { useCoin } from '../../context/CoinContext'

const Home = () => {

  const { allCoin, currency } = useCoin();
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin])

  return (
    <>
      <div className="home">
        <div className="hero">
          <h1>Largest <br /> Crypto Marketplace</h1>
          <p>Welcome to the world's largest cyrptocurrency marketplace.</p>

          <form>
            <input onChange={(e) => handleInput(e)} type="text" placeholder='Search Crypto..' />
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
            displayCoin.slice(0, 10).map((item, index) => (
              <div key={index} className='table-layout' >
                <p>{item.market_cap_rank}</p>
                <div>
                  <img src={item.image} alt="" />
                  <p>{item.name + " - " + item.symbol}</p>
                </div>
                <p>{currency.Symbol} {item.current_price.toLocaleString()}</p>
                <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                  {Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                <p className='market-cap' >{currency.Symbol} {item.market_cap.toLocaleString()}</p>
              </div>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Home