import "./cryptoChart.css";
import { Button } from "antd";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useContext } from "react";
// import axios from "axios";
import CryptoContext from "../../context/cryptoContext";
import {
  HomeOutlined,
  MenuOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  ZoomInOutlined
} from "@ant-design/icons";

export const CryptoChart = () => {
  const { chartData } = useContext(CryptoContext);

  return (
    <div className="mainChart_div">
      <div className="headerChart_div">
        <b>{chartData.title}/BTC</b>
        <span className="headerChart_buttons">
          <btn className="btn btn-sm btnDark">1m</btn>
          <Button type="primary" size="small">
            5m
          </Button>
          <btn className="btn btn-sm btnDark">30m</btn>
          <btn className="btn btn-sm btnDark">1h</btn>
          <btn className="btn btn-sm btnDark">1d</btn>
        </span>
      </div>
      <div className="bodyChart_div">
        <div className="bodyChart_actions">
          <PlusCircleOutlined />
          <MinusCircleOutlined />
          <ZoomInOutlined />
          <HomeOutlined />
          <MenuOutlined />
        </div>
        {chartData ? (
          <Chart
            type="bar"
            data={chartData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "bottom"
                }
              }
            }}
          />
        ) : null}
      </div>
    </div>
  );
};
