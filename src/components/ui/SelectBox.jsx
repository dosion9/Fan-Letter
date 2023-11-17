import React, { useMemo } from "react";
import styled from "styled-components";
import theme from "style/Theme";
import { v4 as uuidv4 } from "uuid";

const StSelect = styled.select.attrs((props) => ({
  onChange: props.$onChange,
  name: props.$name
}))`
  min-width: 10rem;
  padding: ${theme.spacing.base};
  text-align: center;
  border: ${theme.border.black};
  border-radius: ${theme.border.borderRadius};
  outline: none;
  transition: 0.15s;

  &:focus {
    border: ${theme.border.pink};
  }
`;

const StOption = styled.option`
  padding: ${theme.spacing.base};
`;

function SelectBox({ onChange, listData, name }) {
  const key = useMemo(() => uuidv4(), []);
  return (
    <StSelect $onChange={onChange} $name={name}>
      {listData.map((n, i) => {
        return (
          <StOption key={`${key} - ${i}`} value={n}>
            {n}
          </StOption>
        );
      })}
    </StSelect>
  );
}

export default SelectBox;
