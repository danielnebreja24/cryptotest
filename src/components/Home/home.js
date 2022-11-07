import { Dashboard } from "../Dashboard/dashboard";
import { Header } from "../Header/header";
import "./home.css";

export const Home = () => {
  return (
    <div className="mainHome_div">
      {/* HEADER COMPONENT */}
      <Header />
      {/* DASHBOARD COMPONENT */}
      <Dashboard />
    </div>
  );
};
