"use client";
import React from "react";
import { ThemeProvider } from "styled-components";

import { MenuList, MenuListItem, Separator, styleReset } from "react95";

import original from "react95/dist/themes/original";
import { Header } from "../components/Header/Header";

const Page = () => (
  <div>
    <ThemeProvider theme={original}>
      <Header />
    </ThemeProvider>
  </div>
);

export default Page;
