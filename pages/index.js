import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box, Button, Container, Input, VStack } from "@chakra-ui/react";
import { useAccount } from "wagmi";

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();
  return (
    <Box as="main" pb={8}>
      <Container maxW={"6xl"}>
        <VStack>
          <Input></Input> {isDisconnected && <ConnectButton />}
          {isConnecting && <Box>... is conncting</Box>}
          {address && <Button colorScheme="teal" size="md" />}
        </VStack>
      </Container>
    </Box>
  );
}
