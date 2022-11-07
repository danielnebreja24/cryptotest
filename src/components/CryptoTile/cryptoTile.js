import { Tag } from "antd";
import { useContext } from "react";
import CryptoContext from "../../context/cryptoContext";
import Dollar from "../../images/dollar.png";
import "./cryptoTile.css";

export const CryptoTile = () => {
  const { starredCrypto } = useContext(CryptoContext); // CONTEXT FOR THE STARRED CRYPTO DATA
  const { loadChart } = useContext(CryptoContext); //CONTEXT FUNCTION TO LOAD THE CHART BY CLICKING SPECIFIC CRYPTO PAIR

  return (
    <div className="mainCryptoTile_div">
      {/* STATIC TILE ITEM */}
      <div className="cryptoTileItem_div">
        <div className="cryptoTileHead">
          Total Balance
          <span className="cryptoTileLogo">
            <img src={Dollar} alt="currencyLogo" />
          </span>
        </div>
        <div className="cryptoTileValue">
          <b>$53,252</b>2.30 BTC
        </div>
        <div className="cryptoTileVolume">
          <Tag className="cryptoTileTag" color="green">
            +6.15%
          </Tag>
          Since last week
        </div>
      </div>

      {/* STARRED ITEMS FROM THE STARRED DATA CONTEXT, ALL THE ITEMS YOU STARRED WILL SHOW HERE */}
      {starredCrypto.map((item) => {
        let usdVal = parseFloat(item.volume.replace(".", "")) * item.price;

        if (item.star) {
          return (
            <div
              className="cryptoTileItem_div"
              onClick={() => loadChart(item.id, item.coin)}
            >
              <div className="cryptoTileHead">
                {item.coin}/BTC
                <span className="cryptoTileLogo">
                  <img src={item.icon} alt="currencyLogo" />
                </span>
              </div>
              <div className="cryptoTileValue">
                <b>{item.price.toFixed(5)}</b>${usdVal.toFixed(3)}
              </div>
              <div className="cryptoTileVolume">
                Volume: {item.volume.replace(".", ",")} BTC
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
