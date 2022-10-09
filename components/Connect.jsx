import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button, Icon, Box, Flex, Image, HStack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const Connect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Box
                    as={"button"}
                    height={{
                      base: "38px",
                      sm: "35px",
                      lg: "38px",
                      xl: "38px",
                      "2xl": "44px",
                      "3xl": "49px",
                      "4xl": "51px",
                    }}
                    width={{
                      base: "170px",
                      sm: "220px",
                      lg: "210px",
                      xl: "230px",
                      "2xl": "230px",
                      "3xl": "260px",
                    }}
                    bgImage={"url('/button-bg-big.png')"}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    bgSize={"cover"}
                    onClick={openConnectModal}
                    fontFamily={"comic_runesregular"}
                    fontWeight={"bold"}
                    color={"black"}
                    fontSize={{
                      base: "lg",
                      md: "lg",
                      lg: "lg",
                      xl: "xl",
                      "2xl": "2xl",
                    }}
                    _active={{
                      transform: "scale(0.98)",
                    }}
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                    filter="auto"
                    brightness="110%"
                    pt={1}
                  >
                    <Flex height={"100%"} align={"center"} justify={"center"}>
                      Connect Wallet
                    </Flex>
                  </Box>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    colorScheme={"red"}
                    color={"white"}
                    bg={"red.600"}
                    _hover={{ bg: "red.700" }}
                    borderRadius={"10px"}
                    width={"100%"}
                    onClick={openChainModal}
                    fontFamily={"comic_runesregular"}
                    fontWeight={"light"}
                    fontSize={"xl"}
                    align={"center"}
                    type="button"
                    pt={2}
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <Flex gap={{ base: 2, sm: 5 }}>
                  <Button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                    px={{ base: 2, md: 4 }}
                    borderRadius={"lg"}
                    border={"2px solid gray"}
                  >
                    <HStack spacing={{ base: 0, sm: 1 }}>
                      {chain.hasIcon && (
                        <Box
                          style={{
                            background: chain.iconBackground,
                            width: 20,
                            height: 20,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 20, height: 20 }}
                            />
                          )}
                        </Box>
                      )}
                      <Flex
                        display={{ base: "none", lg: "inline-block" }}
                        fontFamily={"comic_runesregular"}
                        fontSize={"xl"}
                        color={"gray"}
                        height={"100%"}
                        pt={1}
                      >
                        {chain.name}
                      </Flex>
                      <Icon
                        ml={{ base: 0, md: 2 }}
                        w={6}
                        h={6}
                        as={ChevronDownIcon}
                        color={"gray"}
                        /*  border={"solid 1px black"} */
                      ></Icon>
                    </HStack>
                  </Button>

                  <Button
                    onClick={openAccountModal}
                    type="button"
                    pr={0}
                    pl={{ base: 0, md: 4 }}
                    borderRadius={"lg"}
                    border={"2px solid gray"}
                  >
                    <Flex
                      display={{ base: "none", md: "inline-block" }}
                      fontFamily={"comic_runesregular"}
                      fontSize={"xl"}
                      color={"gray"}
                      align={"center"}
                      pt={1}
                    >
                      {" "}
                      {account.displayBalance
                        ? ` ${account.displayBalance}`
                        : ""}{" "}
                    </Flex>
                    <HStack
                      ml={{ base: 0, md: 6 }}
                      px={{ base: 2, md: 4 }}
                      h={"100%"}
                      color={"whiteAlpha.900"}
                      fontFamily={"comic_runesregular"}
                      fontWeight={"light"}
                      fontSize={"xl"}
                      align={"center"}
                      bgColor={"blackAlpha.600"}
                      _active={{ bgColor: "blackAlpha.700" }}
                      _hover={{ bgColor: "blackAlpha.700" }}
                      borderLeftRadius={"md"}
                      borderRightRadius={"md"}
                      borderColor={"whiteAlpha.800"}
                      border={"solid 1px"}
                    >
                      <Box pt={1} fontSize={{ base: "16px", md: "20px" }}>
                        {account.displayName}
                      </Box>
                      <Image
                        boxSize="18px"
                        objectFit="cover"
                        alt={"icon"}
                        src={"/Ellipse.png"}
                        ml={2}
                        display={{ base: "none", sm: "initial" }}
                      ></Image>
                    </HStack>
                  </Button>
                </Flex>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
