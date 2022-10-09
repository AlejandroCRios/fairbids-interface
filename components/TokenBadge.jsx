import { useEffect, useState } from "react";
import { HStack, Image, Text, WrapItem } from "@chakra-ui/react";

import { useAppInfo } from "../context/appContext";
import { useStateInfo } from "../context/stateContext";

const TokenBadge = ({ token }) => {
  const [isItemSelected, setIsItemSelected] = useState(false);

  const { bid_Amount, setBid_Amount, bidToken, setBidToken } = useAppInfo();

  const { onCloseSel, isSelectOne } = useStateInfo();
  useEffect(() => {
    /*  if (
      bidToken?.name === token.token.name ||
      tokenTwo_token?.name === token.token.name
    ) {
      setisItemSelected(true);
    } */
  }, [bidToken, token]);

  return (
    <WrapItem>
      <HStack
        p={2}
        borderWidth={"1px"}
        borderStyle={"solid"}
        borderColor={"whiteAlpha.500"}
        borderRadius={"lg"}
        disabled={isItemSelected}
        opacity={isItemSelected ? "0.5" : null}
        filter={isItemSelected ? "grayscale(80%)" : null}
        as={isItemSelected ? "div" : "button"}
        _hover={{ bgColor: "#0A071E" }}
        _active={{
          bg: "#0A071E",
          transform: "scale(0.98)",
        }}
        onClick={() => {
          if (!isItemSelected) {
            setBidToken(token);
            onCloseSel();
          }
        }}
      >
        <Image src={token.iconUrl} h={"24px"} w={"24px"} alt="icon"></Image>

        <Text
          align={"start"}
          fontWeight={"semibold"}
          fontSize={{ base: "13px", md: "16px" }}
        >
          {token.symbol}
        </Text>
      </HStack>
    </WrapItem>
  );
};

export default TokenBadge;
