import React from "react";
import styled from "styled-components";
import theme from "style/Theme";

const StInputWrap = styled.div``;

const StInput = styled.input.attrs((props) => ({
  type: props?.$type || "text",
  placeholder: props?.$placeholder,
  value: props.$value,
  onChange: props?.$onChange
}))`
  padding: 0.5rem;
  outline: none;
  border: ${(props) => theme.border[props.$color] || theme.border.black};
  border-radius: ${theme.border.borderRadius};
`;

function Input({ $type, $placeholder, $value, $onChange, $color }) {
  return (
    <StInputWrap>
      <StInput $type={$type} $value={$value} $placeholder={$placeholder} $onChange={$onChange} $color={$color} />
    </StInputWrap>
  );
}

export default Input;
