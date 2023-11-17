import React from "react";
import theme from "style/Theme";
import styled from "styled-components";

const StTextarea = styled.textarea.attrs((props) => ({
  rows: props.$row || "6",
  placeholder: props?.$placeholder,
  onChange: props?.$onChange,
  value: props.$value,
  maxLength: props.$maxlength,
  minLength: props.$minlength,
  autoComplete: "off",
  name: props.$name
}))`
  width: 100%;
  border: ${(props) => theme.border[props.$color] || theme.border.black};
  border-radius: ${theme.border.borderRadius};
  padding: ${theme.spacing.base};
  resize: none;
  outline: none;
`;

function Textarea({ placeholder, onChange, color, value, maxlength, minlength, name }) {
  return (
    <StTextarea
      $placeholder={placeholder}
      $color={color}
      $value={value}
      $onChange={onChange}
      $maxlength={maxlength}
      $minlength={minlength}
      $name={name}
    />
  );
}

export default Textarea;
