import { Box, Button, Container, Input, VStack } from "@chakra-ui/react";
import { useAccount, useContract, useSigner, useProvider } from "wagmi";

import useBrink from "../utils/useBrink";
import { useForm } from "../helpers/useForm";
import ItemList from "../components/ItemList";
import useAccountSigner from "../utils/useAccountSigner";

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { account } = useBrink();
  const { result } = useAccountSigner(account);

  return (
    <Box as="main" pb={8} color={"whiteAlpha.800"}>
      <Container maxW={"xl"} w={"100%"} pt={20}>
        <ItemList></ItemList>
      </Container>
    </Box>
  );
}
