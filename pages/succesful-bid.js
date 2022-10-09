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

const SuccesfulBid = () => {
  return (
    <VStack rounded={"md"} p={5} spacing={5} bgColor={"#0A071E"} boxShadow="xl">
      <Heading color={"whiteAlpha.800"} fontSize={"lg"}>
        Congratitulations
      </Heading>
      <VStack
        w={"100%"}
        justify={"center"}
        align={"flex-start"}
        color={"whiteAlpha.700"}
        spacing={3}
      ></VStack>
      <VStack py={10} w={"100%"} align={"flex-start"}>
        {/*  <Text>How much do you want to bid for this item?</Text> */}

        <Stack justify={"center"} w={"100%"}></Stack>
      </VStack>
    </VStack>
  );
};

export default SuccesfulBid;
