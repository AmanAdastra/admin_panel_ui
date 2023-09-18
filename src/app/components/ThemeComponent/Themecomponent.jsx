"use client";

import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/app/Icons/MoonIcon";
import { SunIcon } from "@/app/Icons/SunIcon";
import { useState } from "react";
import { useAtom } from "jotai";
import { appTheme } from "@/app/store/GlobalStore";

const Themecomponent = () => {
  const [isSelected, setIsSelected] = useState(true);
  const [theme, setTheme] = useAtom(appTheme);
  
  const toggleMode = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
    setIsSelected(oldvalue => !oldvalue)
  };

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={toggleMode}
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
        {
          theme == "light"? "Light Mode": "Dark Mode"
        }
    </Switch>
  );
};

export default Themecomponent;
