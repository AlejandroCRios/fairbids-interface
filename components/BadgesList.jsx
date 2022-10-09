import { Wrap } from "@chakra-ui/react";
import { tokens } from "../data/tokens";
import TokenBadge from "./tokenBadge";

const BadgesList = () => {
  return (
    <>
      <Wrap>
        {" "}
        {tokens.map((token) => (
          <TokenBadge
            key={`uniqueID${token.symbol}`}
            token={token}
          ></TokenBadge>
        ))}
      </Wrap>
    </>
  );
};

export default BadgesList;
