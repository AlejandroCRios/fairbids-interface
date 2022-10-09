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

const SuccesfulBid = () => {
  const devconTicket = items.find((item) => item.name === "Devcon VI Ticket");
  return (
    <VStack
      rounded={"md"}
      p={5}
      spacing={10}
      bgColor={"#0A071E"}
      boxShadow="xl"
    >
      <Image src={data.image} alt={"item image"}></Image>
      <Heading color={"whiteAlpha.800"} fontSize={"lg"}>
        {devconTicket.name} {"    "}
      </Heading>

      <HStack w={"100%"} justify={"center"}>
        <Text>
          <Text as={"span"} fontWeight={"bold"}>
            Minimum price:
          </Text>{" "}
          ${devconTicket.minPrice}
        </Text>
      </HStack>
    </VStack>
  );
};

export default SuccesfulBid;
