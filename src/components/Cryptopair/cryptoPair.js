import { useEffect, useState, useContext } from "react";
import "./cryptoPair.css";
import CryptoContext from "../../context/cryptoContext";
import { EllipsisOutlined, StarFilled, StarOutlined } from "@ant-design/icons";

export const CryptoPair = () => {
  const { crypto } = useContext(CryptoContext);
  const { starCrypto } = useContext(CryptoContext);
  const { loadChart } = useContext(CryptoContext);

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
                    <tr onClick={() => loadChart(item.id, item.coin)}>
                      <td>
                        {item.star ? (
                          <StarFilled onClick={() => starCrypto(item)} className="tableStar" />
                        ) : (
                          <StarOutlined onClick={() => starCrypto(item)} className="tableStar" />
                        )}
                      </td>
                      <td>{item.coin}</td>
                      <td>{item.price}</td>
                      <td>{item.volume}</td>
                      <td>
                        <span
                          className={item.change.charAt(0) === "+" ? "txtSuccess" : "txtDanger"}
                        >
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
