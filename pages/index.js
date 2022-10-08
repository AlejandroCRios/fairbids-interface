import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box, Button, Container, Input, VStack } from "@chakra-ui/react";
import { useAccount, useContract, useSigner, useProvider } from "wagmi";
import useBrink from "../utils/useBrink";

import { useForm } from "../helpers/useForm";

export default function Home() {
  const { formState, onInputChange } = useForm();
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data } = useSigner();
  console.log(data);
  return (
    <Box as="main" pb={8}>
      <Container maxW={"xl"} w={"100%"} pt={20}>
        <VStack
          rounded={"md"}
          p={5}
          spacing={5}
          bgColor={"#0A071E"}
          boxShadow="xl"
        >
          <Input
            color={"white"}
            name="bidPrice"
            onChange={onInputChange}
          ></Input>{" "}
          {isDisconnected && <ConnectButton />}
          {isConnecting && <Box>... is conncting</Box>}
          {address && (
            <Button colorScheme="yellow" size="md">
              Mint
            </Button>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
