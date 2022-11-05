// import logo from './logo.svg';

import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist/antd.css";
import { CryptoProvider } from "./context/cryptoContext";

import { Home } from "./components/Home/home";

function App() {
  return (
    <div>
      <CryptoProvider>
        <Home />
      </CryptoProvider>
    </div>
  );
}

export default App;
