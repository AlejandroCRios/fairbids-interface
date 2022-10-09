import { Box, Button, Container, Input, VStack } from "@chakra-ui/react";
import { useAccount, useContract, useSigner, useProvider } from "wagmi";

import { useForm } from "../helpers/useForm";

import Item from "../components/Item";

const items = [
  {
    name: "Devcon VI Ticket",
    image: "/image_0.png",
    event: "Devcon VI - Oct. 11th – 14th, 2022",
    orderCode: "Z5A3D",
    details: "1x LatAm Auction ticket",
    contact: "Devcon - support@devcon.org",
  },
];
export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();
  /*  const { account } = useBrink(); */
  /*   const { result } = useAccountSigner(account); */

  return (
    <>
      {" "}
      {items.map((item) => (
        <Item key={item.name} data={item} />
      ))}
    </>
  );
}
