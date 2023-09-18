"use client";
import React from "react";
import { Providers } from "../providers/ThemeProvider";
import { useState, useEffect } from "react";
import { appTheme } from "../store/GlobalStore";
import { useAtom } from "jotai";

const HeadComponent = ({ children }) => {
  const [theme, setTheme] = useAtom(appTheme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      <html className={theme}>
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
};

export default HeadComponent;
