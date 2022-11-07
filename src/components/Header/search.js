import { useContext } from "react";
import CryptoContext from "../../context/cryptoContext";

export const Search = () => {
  const { searchCrypto } = useContext(CryptoContext); //CONTEXT FUNCTION TO CALL WHEN THE USER TYPED ANYTHING IN THE SEARCHBAR */

  return <input onChange={(e) => searchCrypto(e.target.value)} placeholder="Search currency . . ." className="headerMenu_search" />;
};
