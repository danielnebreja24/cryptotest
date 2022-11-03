import { Button, Col, Row } from "antd";
import { CryptoChart } from "../Cryptochart/cryptoChart";
import { CryptoPair } from "../Cryptopair/cryptoPair";
import { Instrument } from "../Instrument/instrument";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="mainDashboard_div">
      <div className="dashBoard_header">
        <span className="dashBoard_title">
          <b>Crypto</b> Dashboard
        </span>
        <span className="dashBoard_buttons">
          <button className="btn btnDark">Invite a Friend</button>
          <Button type="primary">New Project</Button>
        </span>
      </div>
      {/* INSTRUMENT PANEL */}
      <Instrument />
      <Row gutter={20} className="dashBoard_chart">
        <Col span={16}>
          <CryptoChart />
        </Col>
        <Col span={8}>
          <CryptoPair />
        </Col>
      </Row>
    </div>
  );
};
