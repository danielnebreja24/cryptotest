import axios from "axios";
import moment from "moment";
import { createContext, useEffect, useState } from "react";
import { cryptoData } from "../data/cryptoData";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [allCrypto, setAllCrypto] = useState([]);
  const [crypto, setCrypto] = useState([]);
  const [starredCrypto, setStarredCrypto] = useState([]);
  const [chartData, setChartData] = useState();

  useEffect(() => {
    setAllCrypto(cryptoData);
    setCrypto(cryptoData);

    loadChart("ethereum", "ETH");
  }, []);

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

  const loadChart = (id, coin) => {
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
    const unixToday = Math.floor(today.getTime());
    const unixLastWeek = Math.floor(lastWeek.getTime());

    axios
      .get(
        `https://api.coincap.io/v2/assets/${id.toLowerCase()}/history?interval=d1&start=${unixLastWeek}&end=${unixToday}`
      )
      .then((res) => {
        const d = res.data.data;

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
      value={{ crypto, starredCrypto, chartData, starCrypto, searchCrypto, loadChart }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContext;
