import React, { useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { useCoin } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';
import Tick from "../../assets/tick.png";

const Coin = () => {
    const { coinId } = useParams();
    const { currency, setSingleFavouriteCoin, singleFavouriteCoin } = useCoin();
    const [coinData, setCoinData] = useState();
    const [historicalData, setHistoricalData] = useState();
    const [favourite, setFavourite] = useState(false);

    // Check if coin is already in favourites
    useEffect(() => {
        const isFavourite = singleFavouriteCoin.some((coin) => coin.name === coinId);
        setFavourite(isFavourite);
    }, [singleFavouriteCoin, coinId]);

    // Fetch single coin data
    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': '	CG-UhHVGjwtPmU2hzkhpDpnuLdb'
            }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(response => response.json())
            .then(response => setCoinData(response))
            .catch(err => console.error(err));
    }

    // Fetch historical data
    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': '	CG-UhHVGjwtPmU2hzkhpDpnuLdb'
            }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options)
            .then(response => response.json())
            .then(response => setHistoricalData(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchCoinData();
        fetchHistoricalData();
    }, [currency]);

    // Handle add to favourites
    const handleAddFavourite = () => {
        setFavourite(true);
        setSingleFavouriteCoin((prev) => [
            ...prev,
            {
                name: coinData.id,
                img: coinData.image.small
            }
        ]);
    }

    console.log(singleFavouriteCoin);

    if (coinData && historicalData) {
        return (
            <div className="coin">
                <div className="coin-name">
                    <img src={coinData?.image?.large} alt="img" />
                    <p><b>{coinData?.name} ({coinData?.symbol.toUpperCase()})</b></p>
                </div>

                <div className="coin-chart">
                    <LineChart historicalData={historicalData} />
                </div>

                <div className="coin-info">
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li>{coinData?.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current price</li>
                        <li>{currency.symbol} {coinData?.market_data?.current_price[currency.name].toLocaleString()}</li>
                    </ul>

                    <ul>
                        <li>Market Cap</li>
                        <li>{currency.symbol} {coinData?.market_data?.market_cap[currency.name].toLocaleString()}</li>
                    </ul>

                    <ul>
                        <li>24 Hour high</li>
                        <li>{currency.symbol} {coinData?.market_data?.high_24h[currency.name].toLocaleString()}</li>
                    </ul>

                    <ul>
                        <li>24 Hour low</li>
                        <li>{currency.symbol} {coinData?.market_data?.low_24h[currency.name].toLocaleString()}</li>
                    </ul>

                    <button
                        onClick={handleAddFavourite}
                        className={`${favourite ? "added-to-favourites-btn" : "add-to-favourites-btn"}`} >
                        {favourite ? (
                            <>Added to Favourites <img className='added-to-favourites-tick-icon' src={Tick} alt="" /> </>
                        ) : (
                            "Add to Favourite"
                        )}
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="spinner">
                <div className="spin"></div>
            </div>
        );
    }
}

export default Coin;
