import React from "react";
import styled from "styled-components";
import theme from "style/Theme";

const Container = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 1rem 0;
`;

const StBtn = styled.button`
  padding: 0.5em 2em;
  font-weight: bold;
  background-color: ${(props) => (!props.$outline || props.$active ? theme.color[props.$color] : "transparent")};
  border: ${(props) => `3px solid ${theme.color[props.$color]}`};
  color: ${(props) => (!props.$outline || props.$active ? theme.color.white : theme.color[props.$color])};
  border-radius: 1em;
  cursor: pointer;
  transition: all 0.15s;
  margin-right: 0.5rem;
  font-size: ${(props) => (props.$size ? theme.fontSize[props.$size] : null)};

  &:hover {
    color: ${theme.color.white};
    background-color: ${(props) => (props.$outline ? theme.color[props.$color] : null)};
    opacity: 0.7;
  }
`;

const Btn = ({ children, $color, $size, $outline, $active, ...props }) => {
  const onClick = () => (props?.$onClick ? props.$onClick() : null);
  return (
    <StBtn $color={$color} $size={$size} $outline={$outline} $active={$active} onClick={onClick}>
      {children}
    </StBtn>
  );
};

export { Container, Btn };
