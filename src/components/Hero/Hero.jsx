import React from "react";
import * as S from "../Common";

function Hero({ children }) {
  return <S.Container style={{ backgroundColor: "blue" }}>{children}</S.Container>;
}

export default Hero;
