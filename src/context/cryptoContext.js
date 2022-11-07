import { createContext, useEffect, useState } from "react";
import { cryptoData } from "../data/cryptoData";
import axios from "axios";
import moment from "moment";

const CryptoContext = createContext();

// CONTEXT USED IN ALL THE COMPONENTS TO AVOID PROPS DRILLING

export const CryptoProvider = ({ children }) => {
  const [allCrypto, setAllCrypto] = useState([]); //ALL CRYPTO WILL BE STORED HERE TO AVOID DATA LOSS WHEN SEARCHING CRYPTO PAIR
  const [crypto, setCrypto] = useState([]); //ALL CRYPTO WILL BE STORED HERE BUT DATA WILL CHANGES ONCE THE SEARCH IS TRIGGER
  const [starredCrypto, setStarredCrypto] = useState([]); //ALL THE STARRED CRYPTO PAIRS WILL BE STORED HERE
  const [chartData, setChartData] = useState(); //CHART CRYPTO DATA WILL BE STORED HERE AND WILL USE LIVE/REAL DATA FROM AN API

  useEffect(() => {
    setAllCrypto(cryptoData);
    setCrypto(cryptoData);
    loadChart("ethereum", "ETH"); //INITIAL CALLING OF CHART SO THAT IT WILL RENDER THE FIRST CRYPTO IN THE TABLE
  }, []);

  //FUNCTION TO CALL WHEN STARRING OR UNSTARRING A CRYPTO PAIR
  const starCrypto = (data) => {
    let updatedCrypto = allCrypto.map((item) => {
      if (item.coin === data.coin) {
        return { ...item, star: !item.star };
      }
      return item;
    });

    setStarredCrypto(updatedCrypto);
    setAllCrypto(updatedCrypto);
    setCrypto(updatedCrypto);
  };

  // FUNCTION TO CALL WHEN SEARCHING CRYPTO PAIR
  const searchCrypto = (data) => {
    let updatedCrypto = allCrypto.filter((item) => {
      var d = data.toLowerCase();
      let searchName = item.coin.toLowerCase().includes(d);
      let searchPrice = item.price.toString().includes(d);
      let searchVolume = item.volume.toString().includes(d);
      let searchChange = item.change.toString().includes(d);

      if (searchName || searchPrice || searchVolume || searchChange) {
        return item;
      }
      return null;
    });

    setCrypto(updatedCrypto);
  };

  // FUNCTION TO CALL WHEN YOU WANT TO UPDATE THE DATA IN THE CHART USING THE REAL/LIVE DATA FROM AN API
  const loadChart = (id, coin) => {
    const today = new Date(); //GET THE DATE TODAY
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30); //GET THE DATE 1 MONTH AGO
    const unixToday = Math.floor(today.getTime()); //CONVERT DATE TODAY INTO UNIX MILLISECONDS
    const unixLastWeek = Math.floor(lastWeek.getTime()); //CONVERT DATE 1 MONTH AGO INTO UNIX MILLISECONDS

    // FETCHING DATA FROM THE API TO GET THE PRICE OF SPECIFIC COIN IN 1 MONTH WITH AN INTERVAL OF 1 DAY *WHEN CLICKING A CRYPTO PAIR FROM THE TABLE OR CLICKING A CRYPTO FROM THE TILE AT THE TOP OF THE DASHBOARD WILL TRIGGER THIS FUNCTION AND CALL THIS API TO UPDATE THE CRYPTO CHART DATA
    axios
      .get(
        `https://api.coincap.io/v2/assets/${id.toLowerCase()}/history?interval=d1&start=${unixLastWeek}&end=${unixToday}`
      )
      .then((res) => {
        const d = res.data.data;

        // SETTING THE STATE TO A ACCEPTED CHART FORMAT
        setChartData({
          title: coin,
          labels: d.map((crypto) => moment(crypto.date).format("MMM DD")),
          datasets: [
            {
              label: "Price in USD",
              data: d.map((crypto) => crypto.priceUsd),
              backgroundColor: ["#2BB644", "#E84035"]
            }
          ]
        });
      });
  };

  return (
    <CryptoContext.Provider
      // ALL THE CONTEXT API DATA AND FUCNTIONS
      value={{
        crypto,
        starredCrypto,
        chartData,
        starCrypto,
        searchCrypto,
        loadChart
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContext;
