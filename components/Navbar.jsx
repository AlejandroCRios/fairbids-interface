/* import Logo from "./logo"; */
import NextLink from "next/link";
import {
  Container,
  Image,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ToggleButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

/* const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};
 */
const Navbar = (/* props */) => {
  /*   const { path } = props; */
  const { isDisconnected } = useAccount();
  return (
    <Grid
      position="fixed"
      w="100%"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      /*    {...props} */
      /*  borderBottom={"solid 1px white"} */
      justifyItems={"center"}
    >
      <GridItem maxW="8xl" w={"100%"}>
        <HStack
          display="flex"
          p={4}
          px={10}
          wrap="wrap"
          align="center"
          justify="space-between"
          w={"100%"}
        >
          <HStack align="left" mr={5}>
            <Heading
              as="h2"
              size="lg"
              color={"yellow.400"}
              fontFamily={"Montserrat"}
            >
              v-max
            </Heading>
          </HStack>

          <Box align="right">
            {/*  <ThemeToggleButton /> */}
            {!isDisconnected && <ConnectButton />}
          </Box>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Navbar;
