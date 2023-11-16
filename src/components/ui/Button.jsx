import React from "react";
import styled from "styled-components";
import theme from "style/Theme";

const StButton = styled.button.attrs((props) => ({
  onClick: props?.$onClick
}))`
  padding: ${theme.spacing.base} ${theme.spacing.xl};
  font-weight: bold;
  background-color: ${(props) => (!props.$outline || props.$active ? theme.color[props.$color] : theme.color.white)};
  border: ${(props) => theme.border[props.$color] || theme.border.waring};
  color: ${(props) => (!props.$outline || props.$active ? theme.color.white : theme.color[props.$color])};
  border-radius: ${theme.border.borderRadius};
  cursor: pointer;
  transition: ${theme.transition.base};
  font-size: ${(props) => (props.$size ? theme.fontSize[props.$size] : null)};

  &:hover {
    color: ${theme.color.white};
    background-color: ${(props) => (props.$outline ? theme.color[props.$color] : null)};
    opacity: 0.7;
  }
`;

function Button({ children, $color, $size, $outline, $active, $onClick }) {
  return (
    <StButton $color={$color} $size={$size} $outline={$outline} $active={$active} $onClick={$onClick}>
      {children}
    </StButton>
  );
}

export default Button;
