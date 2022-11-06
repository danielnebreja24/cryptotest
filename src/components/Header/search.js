import { useContext } from "react";
import CryptoContext from "../../context/cryptoContext";

export const Search = () => {
  const { searchCrypto } = useContext(CryptoContext);

  return (
    <input
      onChange={(e) => searchCrypto(e.target.value)}
      placeholder="Search currency . . ."
      className="headerMenu_search"
    />
  );
};
