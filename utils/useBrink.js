import { useEffect } from "react";
import { useAccount, useContract, useSigner, useProvider } from "wagmi";
const brink = require("@brinkninja/sdk");

const useBrink = () => {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();
  //console.log(address,provider,signer)

  const account = {};
  const initBrink = async () => {
    const account = brink.account(address, { provider, signer });
    const deployed = await account.isDeployed();
    console.log(deployed);
    if (!deployed) {
      const tx = await account.deployed();
      console.log(tx);
    }
  };

  useEffect(() => {
    initBrink();
  }, []);

  // Get an AccountSigner instance to sign messages as the owner of an account. Takes an ethers.js Signer [link above]
  // const accountSigner = brink.accountSigner(ethersSigner)
  // console.log("tx", tx)
  return account;
};

export default useBrink;
