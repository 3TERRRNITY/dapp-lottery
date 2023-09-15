import React, { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
} from "react95";
import styled from "styled-components";
import WalletConnect from "../WalletConnect/WalletConnect";

export function Header() {
  const [open, setOpen] = useState(false);
  const NavbarPanel = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    padding: 24px 10px;
  `;
  return (
    <AppBar>
      <NavbarPanel style={{ justifyContent: "space-between" }}>
        <Button
          onClick={() => setOpen(!open)}
          active={open}
          style={{ fontWeight: "bold" }}
        >
          Lottery Menu
        </Button>
        {open && (
          <MenuList
            style={{
              position: "absolute",
              left: "0",
              top: "100%",
            }}
            onClick={() => setOpen(false)}
          >
            <MenuListItem>
              <span role="img" aria-label="👨‍💻">
                👨‍💻
              </span>
              Profile
            </MenuListItem>
            <MenuListItem>
              <span role="img" aria-label="📁">
                📁
              </span>
              My account
            </MenuListItem>
            <Separator />
            <MenuListItem disabled>
              <span role="img" aria-label="🔙">
                🔙
              </span>
              Logout
            </MenuListItem>
          </MenuList>
        )}
        <></>
        <WalletConnect />
      </NavbarPanel>
    </AppBar>
  );
}
