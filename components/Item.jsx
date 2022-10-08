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
} from "@chakra-ui/react";
import React from "react";
import { useAccount, useContract, useSigner, useProvider } from "wagmi";
import { useForm } from "../helpers/useForm";

const Item = ({ data }) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { formState, onInputChange } = useForm();

  return (
    <VStack rounded={"md"} p={5} spacing={5} bgColor={"#0A071E"} boxShadow="xl">
      <Image src={data.image} alt={"item image"}></Image>
      <Heading color={"whiteAlpha.800"} fontSize={"lg"}>
        {data.name} {"    "}
      </Heading>
      <VStack
        w={"100%"}
        justify={"center"}
        align={"flex-start"}
        color={"whiteAlpha.700"}
        spacing={3}
      >
        <HStack justify={"flex-start"} align={"flex-start"} spacing={5}>
          {" "}
          <VStack justify={"flex-start"} align={"flex-start"}>
            {" "}
            <Text fontWeight={"bold"} fontSize={"md"}>
              Event
            </Text>
            <Text fontWeight={"bold"}>Order Code</Text>
            <Text fontWeight={"bold"}>Details</Text>
            <Text fontWeight={"bold"}>Contact</Text>
          </VStack>
          <VStack justify={"flex-start"} align={"flex-start"}>
            <Text>{data.event}</Text>
            <Text>{data.orderCode}</Text>
            <Text>{data.details}</Text>
            <Text>{data.contact}</Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack py={10} w={"100%"} align={"flex-start"}>
        <Text>How much do you want to bid for this item?</Text>
        <Input
          type={"number"}
          color={"white"}
          name="bidPrice"
          onChange={onInputChange}
          placeholder={"3$"}
        ></Input>{" "}
        <Stack justify={"center"} w={"100%"}>
          {" "}
          {isConnecting && <Text>... is connecting</Text>}
          {address && (
            <Button colorScheme="yellow" size="md">
              Bid
            </Button>
          )}
        </Stack>
      </VStack>
    </VStack>
  );
};
export default Item;
