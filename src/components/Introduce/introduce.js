import React from "react";
import Info from "../Info/index";
import { introduceObj } from "./IntroduceData";

const introduce = () => {
  return <Info {...introduceObj} />;
};

export default introduce;
