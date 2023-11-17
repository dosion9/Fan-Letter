import React from "react";
import theme from "style/Theme";
import styled from "styled-components";

const StFooter = styled.footer`
  width: 100%;
  height: 8rem;
  background-color: ${theme.color.blue};
  color: ${theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

function Footer() {
  return <StFooter>Footer</StFooter>;
}

export default Footer;
