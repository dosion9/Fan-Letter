import React, { cloneElement, Children } from "react";
import theme from "style/Theme";
import styled from "styled-components";

const FormWrap = styled.form.attrs(() => ({
  autoComplete: "off"
}))`
  border: 10px double ${(props) => theme.color[props.color]};
  border-radius: ${theme.border.borderRadius};
  padding: ${theme.spacing.base};

  > * {
    margin-bottom: ${theme.spacing.lg};
  }
`;

function Form({ children, onSubmit, color }) {
  return (
    <FormWrap color={color} onSubmit={onSubmit}>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          color
        });
      })}
    </FormWrap>
  );
}

export default Form;
