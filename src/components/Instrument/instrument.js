import { Tag } from "antd";
import Dollar from "../../images/dollar.png";
import "./instrument.css";

export const Instrument = () => {
  return (
    <div className="mainInstrument_div">
      <div className="instrumentItem_div">
        <div className="instrumentHead">
          Total Balance
          <span className="instrumentLogo">
            <img src={Dollar} alt="currencyLogo" />
          </span>
        </div>
        <div className="instrumentValue">
          <b>$53,252</b>2.30 BTC
        </div>
        <div className="instrumentVolume">
          <Tag className="instrumentTag" color="green">
            +6.15%
          </Tag>
          Since last week
        </div>
      </div>
    </div>
  );
};
