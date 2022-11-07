import { useEffect, useState, useContext } from "react";
import "./cryptoPair.css";
import CryptoContext from "../../context/cryptoContext";
import { EllipsisOutlined, StarFilled, StarOutlined } from "@ant-design/icons";

export const CryptoPair = () => {
  const { crypto } = useContext(CryptoContext); //CONTEXT FOR CRYPTO PAIR DATA
  const { starCrypto } = useContext(CryptoContext); //CONTEXT FUNCTION TO STAR OR UNSTAR CRYPTO PAIR
  const { loadChart } = useContext(CryptoContext); //CONTEXT FUNCTION TO LOAD THE CHART BY CLICKING SPECIFIC CRYPTO PAIR

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(crypto);
  }, [crypto]);

  return (
    <div className="mainPair_div">
      <div className="headerPair_div">
        <b>Markets</b> <EllipsisOutlined />
      </div>
      <div className="bodyBable_div">
        {/* TABLE FOR THE CRYPTO PAIR DATA */}
        <table className="cryptoPair_table">
          <thead>
            <tr>
              <th>
                <StarFilled />
              </th>
              <th>Coin</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {data.length
              ? data.map((item) => {
                  return (
                    <tr>
                      <td>
                        {item.star ? (
                          <StarFilled onClick={() => starCrypto(item)} className="tableStar" />
                        ) : (
                          <StarOutlined onClick={() => starCrypto(item)} className="tableStar" />
                        )}
                      </td>
                      <td onClick={() => loadChart(item.id, item.coin)}>{item.coin}</td>
                      <td onClick={() => loadChart(item.id, item.coin)}>{item.price}</td>
                      <td onClick={() => loadChart(item.id, item.coin)}>{item.volume}</td>
                      <td onClick={() => loadChart(item.id, item.coin)}>
                        <span className={item.change.charAt(0) === "+" ? "txtSuccess" : "txtDanger"}>
                          {item.change}
                        </span>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
