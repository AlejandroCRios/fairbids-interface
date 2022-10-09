import Head from "next/head";

import { Box, Container, HStack, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { TokenModal } from "./TokenModal";

Navbar;

const Layout = ({ children }) => {
  return (
    <Box
      as="main"
      pb={8}
      /*     backgroundColor={"#130F27"} */
      bg={useColorModeValue("#130F27", "#202023")}
      minH={"100vh"}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="FairBid" />
        <meta name="author" content="FairBid" />
        <meta name="author" content="FairBid" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="FairBid" />
        <meta property="og:site_name" content="FairBid" />
        <meta name="og:title" content="FairBid" />
        <meta property="og:type" content="website" />

        <title>FairBid - interface</title>
      </Head>
      <TokenModal />
      <Navbar></Navbar>

      <Container w={"100%"} pt={18}>
        <Box as="main" pb={8} color={"whiteAlpha.800"}>
          <Container maxW={"xl"} w={"100%"} pt={20}>
            {children}
          </Container>
        </Box>
      </Container>
    </Box>
  );
};
export default Layout;
