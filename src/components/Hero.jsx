import React from "react";
import styled from "styled-components";
import theme from "style/Theme";
import memberImg from "assets/img/member2.jpg";
const Wrap = styled.div`
  width: 100%;
  height: 30rem;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.$bgImg});
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
`;

function Hero({ children }) {
  return (
    // 주석 : memberImg 변경할 것
    <Wrap $bgImg={memberImg}>
      <Content>{children}</Content>
    </Wrap>
  );
}

export default Hero;
