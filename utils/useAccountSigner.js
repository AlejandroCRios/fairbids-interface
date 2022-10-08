import { useAccount, useContract, useSigner, useProvider } from "wagmi";
const brink = require("@brinkninja/sdk");

const useAccountSigner = (account) => {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();
  console.log(address, provider, signer);

  const accountSigner = brink.accountSigner(signer, network);

  return {};
};

export default useAccountSigner;
