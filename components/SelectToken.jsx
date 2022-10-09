import { useEffect } from "react";

import { Button, HStack, Text, Image, Box } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import { useAccount, useNetwork } from "wagmi";
import { useAppInfo } from "../context/appContext";
import { useStateInfo } from "../context/stateContext";

const SelectToken = ({ addressSpender }) => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { onOpenSel } = useStateInfo();
  const { bid_Amount, bidToken, isBidToken_allowed, readTokenAllowance } =
    useAppInfo();

  useEffect(() => {
    if (bid_Amount && address) {
      readTokenAllowance(bid_Amount, addressSpender, setBidToken_allowed);
    }
  }, [bid_Amount, chain, address]);

  return (
    <Box
      as={"button"}
      onClick={() => {
        onOpenSel();
      }}
      w={"100%"}
    >
      <HStack align={"flex-start"} justify={"flex-start"} px={2}>
        {/*   <Image
          src={bidToken?.iconUrl}
          h={"24px"}
          w={"24px"}
          alt="icon"
          mr={"3px"}
        ></Image> */}
        <Text fontSize={{ base: "14px", md: "16px" }}>{bidToken?.symbol}</Text>
        <ChevronDownIcon w={{ base: 5, md: 5 }} h={{ base: 5, md: 5 }} />
      </HStack>
    </Box>
  );
};

export default SelectToken;
