import React, { useMemo } from "react";
import styled from "styled-components";
import theme from "style/Theme";
import Label from "components/ui/Label";
import { v4 as uuidv4 } from "uuid";

const StInput = styled.input`
  padding: 0.5rem;
  outline: none;
  border: ${(props) => theme.border[props.color] || theme.border.black};
  border-radius: ${theme.border.borderRadius};
`;

function Input({ type, placeholder, value, onChange, color, labelText, maxLength, required }) {
  const id = useMemo(() => uuidv4(), []);
  return (
    <>
      {labelText ? <Label htmlFor={id}>{labelText}</Label> : null}
      <StInput
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        color={color}
        id={id}
        maxLength={maxLength}
      />
    </>
  );
}

export default Input;
