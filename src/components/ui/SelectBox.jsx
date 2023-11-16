import React from "react";
import styled from "styled-components";
import theme from "style/Theme";
import { v4 as uuidv4 } from "uuid";

const StOption = styled.option`
  padding: ${theme.spacing.base};
`;

const StSelect = styled.select.attrs((props) => ({
  onChange: props.$onChange
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

function SelectBox({ $onChange, $listData }) {
  return (
    <StSelect $onChange={$onChange}>
      {$listData.map((n, i) => {
        return (
          <StOption key={uuidv4()} value={n}>
            {n}
          </StOption>
        );
      })}
    </StSelect>
  );
}

export default SelectBox;
