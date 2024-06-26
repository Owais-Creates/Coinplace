import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <h1>Largest <br /> Crypto Marketplace</h1>
          <p>Welcome to the world's largest cyrptocurrency marketplace.</p>

          <form>
            <input type="text" placeholder='Search Crypto..' />
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
        </div>

      </div>
    </>
  )
}

export default Home