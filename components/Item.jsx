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
import React from "react";
import { useAccount, useContract, useSigner, useProvider } from "wagmi";
import { useForm } from "../helpers/useForm";
import { useToast } from "@chakra-ui/react";
import { TokenModal } from "./TokenModal";
import SelectToken from "./SelectToken.jsx";
import { useAppInfo } from "../context/appContext";
import { useRouter } from "next/router";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import wagmigotchiABI from "../data/dummyabi.json";
import { useSignMessage } from "wagmi";

const Item = ({ data }) => {
  const router = useRouter();
  const { address, isConnecting, isDisconnected } = useAccount();
  const { formState, onInputChange } = useForm();
  const toast = useToast();
  const { onOpen } = useDisclosure();
  const { bid_Amount, bidToken, isBidToken_allowed } = useAppInfo();

  const sendBid = () => {
    console.log(address, bid_Amount, bidToken);
  };

  const signObjects = useSignMessage({
    message:
      "Hi there! Thank you for doing a fairbid. You are submitting a $650 DAI bid for Devcon Tickets",
  });
  console.log(signObjects);
  const { signMessage, isSuccess } = signObjects;

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
            <Text>XXXXXXXX</Text>
            <Text>{data.details}</Text>
            <Text>{data.contact}</Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack py={10} w={"100%"} align={"flex-start"}>
        <Text>How much do you want to bid for this item?</Text>
        <HStack w={"100%"}>
          <InputGroup>
            <InputRightElement w={"fit-content"}>
              <SelectToken />
            </InputRightElement>
            <Input
              type={"number"}
              color={"white"}
              name="bidPrice"
              _focus={{ bgColor: "#090616" }}
              onChange={onInputChange}
              placeholder={"3$"}
            />
          </InputGroup>{" "}
          {/* <Button colorScheme={"blue"} onClick={onOpen}>
            Select token
          </Button> */}
        </HStack>

        <Stack justify={"center"} w={"100%"}>
          {" "}
          {isConnecting && <Text>... is connecting</Text>}
          {address ? (
            <Button
              colorScheme="yellow"
              size="md"
              onClick={() => {
                signMessage();
                setTimeout(function () {
                  router.push("/success");
                }, 5000);

                /*  if (isSuccess) router.push("/success"); */
                /* sendBid(); */
                /*     toast({
                  title: "Succesfull Bid.",
                  description: "We've created your Bid.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                  position: "bottom-right",
                }) */
              }}
            >
              Bid
            </Button>
          ) : (
            <Button colorScheme="yellow" disabled size="md">
              connect your wallet
            </Button>
          )}
        </Stack>
      </VStack>
    </VStack>
  );
};
export default Item;
