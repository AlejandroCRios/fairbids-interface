import React, { useEffect, useState } from "react";
import { HStack, Image, Text, VStack, Skeleton } from "@chakra-ui/react";

import { useAccount, useBalance, useNetwork, useContract } from "wagmi";
import { useSwapInfo } from "../../context/swap-context";
import { useStateInfo } from "../../context/state-context";

export default function TokenItem(token) {
  const [isItemDisabled, setIsItemDisabled] = useState(false);
  const { data: account } = useAccount();
  const { activeChain: chain } = useNetwork();
  const {
    tokenOne_token,
    tokenTwo_token,
    setTokenOne_token,
    setTokenTwo_token,
  } = useSwapInfo();

  const { data, isLoading, isError } = useBalance({
    addressOrName: account?.address,
    token: account
      ? token.token.tokenAddress[chain.id]
      : token.token.tokenAddress[1],
  });

  const { onCloseSel, isSelectOne } = useStateInfo();

  useEffect(() => {
    if (
      tokenOne_token?.name === token.token.name ||
      tokenTwo_token?.name === token.token.name
    ) {
      setIsItemDisabled(true);
    }
  }, [tokenOne_token, tokenTwo_token, token]);

  function formatBalance(balance) {
    let result = parseInt(balance?.value) / 10 ** balance?.decimals;
    return result < 1 ? result.toFixed(5) : result.toFixed(2);
  }

  return (
    <>
      <HStack
        disabled={isItemDisabled}
        opacity={isItemDisabled ? "0.5" : null}
        filter={isItemDisabled ? "grayscale(80%)" : null}
        pr={4}
        pl={5}
        py={3}
        as={isItemDisabled ? "div" : "button"}
        _hover={isItemDisabled ? { bg: "white" } : { bg: "#ebedf0" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        w={"100%"}
        justify={"space-between"}
        onClick={() => {
          if (!isItemDisabled) {
            if (isSelectOne) {
              setTokenOne_token(token.token);
            } else {
              setTokenTwo_token(token.token);
            }

            onCloseSel();
          }
        }}
      >
        <HStack>
          <Image
            src={token.token.iconUrl}
            h={"24px"}
            w={"24px"}
            alt="icon"
          ></Image>
          <VStack
            spacing={0}
            align={"start"}
            fontSize={{ base: "13px", md: "16px" }}
          >
            <Text align={"start"} fontWeight={"semibold"}>
              {token.token.symbol}
            </Text>
            <Text fontSize={"12px"}>{token.token.name}</Text>
          </VStack>
        </HStack>

        {isError && <Text>Error fetching balance</Text>}
        <Skeleton isLoaded={!isLoading}>
          {account && <Text>{formatBalance(data)}</Text>}
        </Skeleton>
      </HStack>
    </>
  );
}
