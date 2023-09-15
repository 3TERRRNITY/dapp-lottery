import React from "react";
import { Button, Tooltip } from "react95";

type Props = {};

const WalletConnect = (props: Props) => {
  return (
    <Tooltip
      text="You can connect MetaMask wallet 🦊"
      position="left"
      enterDelay={100}
      leaveDelay={500}
    >
      <Button style={{ fontWeight: "bold" }}>🦊 Connect wallet</Button>
    </Tooltip>
  );
};

export default WalletConnect;
