import React from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'

const Coin = () => {

  const {coinId} = useParams();



  return (
    <>
    <h2>Coin: {coinId}</h2>
    </>
  )
}

export default Coin