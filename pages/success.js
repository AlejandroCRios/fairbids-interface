import {
  VStack,
  Input,
  Box,
  Button,
  Heading,
  Image,
  Text,
  HStack,
  Stack,
  useDisclosure,
  InputRightElement,
  NumberInput,
  InputGroup,
} from "@chakra-ui/react";
import { items } from "../data/items";

const Success = () => {
  const devconTicket = items.find((item) => item.name === "Devcon VI Ticket");
  return (
    <VStack
      rounded={"md"}
      p={5}
      spacing={10}
      bgColor={"#0A071E"}
      boxShadow="xl"
    >
      <Image src={devconTicket.image} alt={"item image"}></Image>
      <Image src={"/party.png"} boxSize={"100"} alt={"item image"}></Image>
      <VStack pb={10}>
        <Heading color={"whiteAlpha.800"} fontSize={"lg"}>
          You just Bid
        </Heading>
        <Heading color={"whiteAlpha.800"} fontSize={"lg"}>
          $650 DAI for
        </Heading>
        <Heading color={"whiteAlpha.800"} fontSize={"lg"}>
          {devconTicket.name}!
        </Heading>
      </VStack>
    </VStack>
  );
};

export default Success;
