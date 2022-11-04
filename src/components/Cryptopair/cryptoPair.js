import { EllipsisOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
// import axios from "axios";
import { useEffect, useState } from "react";
// import { Table } from "antd";
import "./cryptoPair.css";

export const CryptoPair = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  });

  const handleChange = (e) => {
    // props.
  };

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
                    <tr>
                      <td>
                        {item.star ? (
                          <StarFilled
                            onClick={() => handleChange(item)}
                            className="tableStar"
                          />
                        ) : (
                          <StarOutlined
                            onClick={() => handleChange(item)}
                            className="tableStar"
                          />
                        )}
                      </td>
                      <td>{item.coin}</td>
                      <td>{item.price}</td>
                      <td>{item.volume}</td>
                      <td>
                        <span
                          className={
                            item.change.charAt(0) === "+"
                              ? "txtSuccess"
                              : "txtDanger"
                          }
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
