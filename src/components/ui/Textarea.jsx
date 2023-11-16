import React from "react";
import theme from "style/Theme";
import styled from "styled-components";

const StTextarea = styled.textarea.attrs((props) => ({
  rows: props.$row || "10",
  cols: props.$cols || "30",
  placeholder: props?.$placeholder
}))`
  border: ${(props) => theme.border[props.$color] || theme.border.black};
  border-radius: ${theme.border.borderRadius};
  padding: ${theme.spacing.base};
`;

function Textarea({ $placeholder, $onChange, $color }) {
  const onChange = () => ($onChange ? $onChange() : null);
  return <StTextarea $placeholder={$placeholder} $color={$color} $onChange={onChange} />;
}

export default Textarea;
