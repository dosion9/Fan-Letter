import React from "react";
import theme from "style/Theme";
import styled from "styled-components";

const FormWrap = styled.form.attrs(() => ({
  autoComplete: "off"
}))`
  border: 10px double ${(props) => theme.color[props.color]};
  border-radius: ${theme.border.borderRadius};
  padding: ${theme.spacing.base};
  display: grid;
  gap: ${theme.spacing.lg};
`;

function Form({ children, onSubmit, color }) {
  return (
    <FormWrap color={color} onSubmit={onSubmit}>
      {children}
    </FormWrap>
  );
}

export default Form;
