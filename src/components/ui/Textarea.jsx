import React, { useMemo } from "react";
import theme from "style/Theme";
import styled from "styled-components";
import Label from "components/ui/Label";
import { v4 as uuidv4 } from "uuid";

const StTextarea = styled.textarea`
  width: 100%;
  border: ${(props) => theme.border[props.color] || theme.border.black};
  border-radius: ${theme.border.borderRadius};
  padding: ${theme.spacing.base};
  resize: none;
  outline: none;
`;

function Textarea({ placeholder, onChange, color, value, maxLength, labelText }) {
  const id = useMemo(() => uuidv4(), []);

  return (
    <div>
      {labelText ? <Label htmlFor={id}>{labelText}</Label> : null}
      <StTextarea
        placeholder={placeholder}
        color={color}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        id={id}
        autoComplete={"off"}
        rows={6}
      />
    </div>
  );
}

export default Textarea;
