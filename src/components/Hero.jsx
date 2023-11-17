import React from "react";
import styled from "styled-components";
import memberImg from "assets/img/member2.jpg";
import Container from "./ui/Container";
const StHeroWrap = styled.section`
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

const StHeroContent = styled(Container)``;

function Hero({ children }) {
  return (
    // 주석 : memberImg 변경할 것
    <StHeroWrap $bgImg={memberImg}>
      <StHeroContent>{children}</StHeroContent>
    </StHeroWrap>
  );
}

export default Hero;
