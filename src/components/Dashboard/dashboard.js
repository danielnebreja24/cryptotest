import { Button } from "antd";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="mainDashboard_div">
      <div className="dashBoard_header">
        <span className="dashBoard_title">
          <b>Crypto</b> Dashboard
        </span>
        <span className="dashBoard_buttons">
          <Button type="text" dark>
            Invite a Friend
          </Button>
          <Button type="primary">New Project</Button>
        </span>
      </div>
    </div>
  );
};
