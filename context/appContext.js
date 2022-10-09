import { createContext, useContext, useState } from "react";
import { useAccount, useNetwork, useSigner, useProvider } from "wagmi";
import { tokens } from "../data/tokens";

export const AppContext = createContext();
export const useAppInfo = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  /* Swap values state */
  const initialTokenA = tokens.filter((token) => token.symbol === "DAI");
  const [bid_Amount, setBid_Amount] = useState("");
  const [bidToken, setBidToken] = useState(initialTokenA[0]);
  const [isBidToken_allowed, setBidToken_allowed] = useState(false);

  /* Web3 Data and contracts */

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  return (
    <AppContext.Provider
      value={{
        bid_Amount,
        setBid_Amount,
        bidToken,
        setBidToken,
        isBidToken_allowed,
        setBidToken_allowed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
