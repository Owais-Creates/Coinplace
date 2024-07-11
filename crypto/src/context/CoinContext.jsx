import { createContext, useContext, useEffect, useState } from "react";

const CoinContext = createContext();

export const useCoin = () => {
    return useContext(CoinContext);
}

const CoinProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [isModalActive, setIsModalActive] = useState(false);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });
    const [singleFavouriteCoin, setSingleFavouriteCoin] = useState(() => {
        // Initialize state from local storage
        const storedFavourites = localStorage.getItem('favouriteCoins');
        return storedFavourites ? JSON.parse(storedFavourites) : [];
    });

    useEffect(() => {
        // Save state to local storage whenever it changes
        localStorage.setItem('favouriteCoins', JSON.stringify(singleFavouriteCoin));
    }, [singleFavouriteCoin]);

    const handleModal = () => {
        setIsModalActive(false);
    }

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': '	CG-UhHVGjwtPmU2hzkhpDpnuLdb'
            }
        };

        const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
        const response = await data.json();
        setAllCoin(response);
    }

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue = {
        allCoin,
        setAllCoin,
        currency,
        setCurrency,
        isModalActive,
        setIsModalActive,
        handleModal,
        singleFavouriteCoin,
        setSingleFavouriteCoin
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
};

export default CoinProvider;
