import { createContext, useEffect, useState } from "react";
import { cryptoData } from "../data/cryptoData";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    setCrypto(cryptoData);
  }, []);

  const starCrypto = (data) => {
    let updatedCrypto = crypto.map((item) => {
      if (item.coin === data.coin) {
        return { ...item, star: !item.star };
      }
      return item;
    });

    setCrypto(updatedCrypto);
  };

  return <CryptoContext.Provider value={{ crypto, starCrypto }}>{children}</CryptoContext.Provider>;
};

export default CryptoContext;
