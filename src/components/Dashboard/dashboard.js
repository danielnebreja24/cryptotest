import { Button, Col, Row } from "antd";
import { CryptoChart } from "../Cryptochart/cryptoChart";
import { CryptoPair } from "../Cryptopair/cryptoPair";
import { CryptoTile } from "../CryptoTile/cryptoTile";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="mainDashboard_div">
      {/* DASHBOARD HEADER THAT CONTAINS THE TITLE AND THE BUTTONS */}
      <div className="dashBoard_header">
        <span className="dashBoard_title">
          <b>Crypto</b> Dashboard
        </span>
        <span className="dashBoard_buttons">
          <button className="btn btnDark">Invite a Friend</button>
          <Button type="primary">New Project</Button>
        </span>
      </div>
      <CryptoTile /> {/* CRYPTO TILE PANEL */}
      <Row gutter={20} className="dashBoard_chart">
        <Col span={16}>
          <CryptoChart /> {/* CRYPTO CHART PANEL */}
        </Col>
        <Col span={8}>
          <CryptoPair /> {/* CRYPTO PAIR PANEL */}
        </Col>
      </Row>
    </div>
  );
};
