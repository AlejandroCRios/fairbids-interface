import "@rainbow-me/rainbowkit/styles.css";

import { ChakraProvider } from "@chakra-ui/react";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { theme } from "../theme";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli],
  [
    // alchemyProvider({ apiKey: "1VRMN3cj79ZsV6_zSBD9tUeGrNjUdptc" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Vmax-interface",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const Main = ({ children }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        theme={darkTheme()}
        chains={chains} /* theme={darkTheme} */
      >
        <ChakraProvider theme={theme}> {children}</ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
