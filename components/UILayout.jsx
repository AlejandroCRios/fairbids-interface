import Head from "next/head";

import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Navbar";

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
        <meta name="description" content="VMax" />
        <meta name="author" content="VMax" />
        <meta name="author" content="VMax" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="VMax" />
        <meta property="og:site_name" content="VMax" />
        <meta name="og:title" content="VMax" />
        <meta property="og:type" content="website" />

        <title>VMax - interface</title>
      </Head>

      <Navbar></Navbar>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};
export default Layout;
