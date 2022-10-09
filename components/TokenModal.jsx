import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  VStack,
  Input,
  Wrap,
  ModalFooter,
  Modal,
  Text,
  ModalContent,
  useBreakpointValue,
  ModalOverlay,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";
import { useStateInfo } from "../context/stateContext";
import { tokens } from "../data/tokens";
import BadgesList from "./BadgesList";
Search2Icon;

function RenderItems(tokens) {
  return (
    <>
      {tokens.map((token) => (
        <></> /* <TokenItem
              key={`uniqueID${token.symbol}`}
              token={token}
            ></TokenItem> */
      ))}
    </>
  );
}

export function TokenModal() {
  const { isOpenSel, onCloseSel } = useStateInfo();
  return (
    <>
      <Modal isOpen={isOpenSel} onClose={onCloseSel} size={"sm"} isCentered>
        <ModalOverlay />
        <ModalContent
          rounded={"2xl"}
          bgColor={"#130F27"}
          color={"whiteAlpha.800"}
        >
          <Box
            height={"100%"}
            w={"100%"}
            rounded={"2xl"}
            pb={{ base: 20, md: 10 }}
          >
            <ModalCloseButton zIndex={10} size={"md"} />

            <Box
              width={{ base: "100%", md: "100%" }}
              height={"100%"}
              borderRadius={"lg"}
            >
              <VStack
                w={"100%"}
                px={5}
                spacing={{ base: 3, md: 5 }}
                pt={{ base: 8, md: 10 }}
                pb={{ base: 3, md: 5 }}
              >
                <HStack w={"100%"} align={"flex-start"}>
                  {" "}
                  <Text>Select coin</Text>
                </HStack>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    {" "}
                    <Search2Icon />{" "}
                  </InputLeftElement>
                  <Input
                    type={"text"}
                    color={"white"}
                    borderColor={"whiteAlpha.400"}
                    _focus={{ bgColor: "#090616" }}
                  />{" "}
                </InputGroup>

                <BadgesList></BadgesList>
              </VStack>
            </Box>
          </Box>
          {/*  <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
