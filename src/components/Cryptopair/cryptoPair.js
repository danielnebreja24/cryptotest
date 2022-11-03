import { EllipsisOutlined, StarFilled } from "@ant-design/icons";
// import { Table } from "antd";
import "./cryptoPair.css";

export const CryptoPair = () => {
  return (
    <div className="mainPair_div">
      <div className="headerPair_div">
        <b>Markets</b> <EllipsisOutlined />
      </div>
      <div className="headertable_div">
        <table className="cryptoPair_table">
          <thead>
            <th>
              <StarFilled />
            </th>
            <th>Coin</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Change</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <StarFilled />
              </td>
              <td>ETH</td>
              <td>0.029898789</td>
              <td>427.980</td>
              <td>+1.91</td>
            </tr>
            <tr>
              <td>
                <StarFilled />
              </td>
              <td>ETH</td>
              <td>0.029898789</td>
              <td>427.980</td>
              <td>+1.91</td>
            </tr>
            <tr>
              <td>
                <StarFilled />
              </td>
              <td>ETH</td>
              <td>0.029898789</td>
              <td>427.980</td>
              <td>+1.91</td>
            </tr>
            <tr>
              <td>
                <StarFilled />
              </td>
              <td>ETH</td>
              <td>0.029898789</td>
              <td>427.980</td>
              <td>+1.91</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
