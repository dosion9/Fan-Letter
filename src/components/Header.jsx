import React from "react";
import theme from "style/Theme";
import styled from "styled-components";

const StHeader = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${theme.color.blue};
  color: ${theme.color.white};
  display: flex;
  align-items: center;
  padding: ${theme.spacing.base};
`;

function Header() {
  return <StHeader>Header</StHeader>;
}

export default Header;
