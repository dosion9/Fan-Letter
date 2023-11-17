import React from "react";
import styled from "styled-components";

const StLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor
}))`
  min-width: 10rem;
  font-weight: bold;
`;

function Label({ children, htmlFor }) {
  return <StLabel htmlFor={htmlFor}>{children}</StLabel>;
}

export default Label;
