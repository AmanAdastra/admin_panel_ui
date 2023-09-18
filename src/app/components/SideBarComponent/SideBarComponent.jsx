import React from "react";
import SideBarItemComponent from "./SideBarItemComponent";
import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";

let svg_list = [<AiFillHome color="black dark:white" />, <AiOutlineUserAdd color="black dark:white"/>];
let svg_text = ["Dashboard", "Users"];

const SideBarComponent = () => {
  return (
    <>
      {svg_list.map((el, index) => {
        return (
          <SideBarItemComponent
            key={index + Math.random()}
            text={svg_text[index]}
            svg_icon={svg_list[index]}
          />
        );
      })}
    </>
  );
};

export default SideBarComponent;
