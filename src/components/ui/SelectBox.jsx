import React, { useMemo } from "react";
import styled from "styled-components";
import theme from "style/Theme";
import Label from "components/ui/Label";
import { v4 as uuidv4 } from "uuid";

const StRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StSelect = styled.select`
  min-width: 10rem;
  width: 100%;
  padding: ${theme.spacing.sm};
  text-align: center;
  border: ${(props) => theme.border[props.color] || theme.border.black};
  border-radius: ${theme.border.borderRadius};
  outline: none;
  transition: 0.15s;
`;

const StOption = styled.option`
  padding: ${theme.spacing.sm};
`;

function SelectBox({ onChange, listData, value, labelText, color }) {
  const key = useMemo(() => uuidv4(), []);
  const id = useMemo(() => uuidv4(), []);
  return (
    <StRow>
      {labelText ? <Label htmlFor={id}>{labelText}</Label> : null}
      <StSelect onChange={onChange} id={id} value={value} color={color}>
        {listData.map((n, i) => {
          return (
            <StOption key={`${key} - ${i}`} value={n}>
              {n}
            </StOption>
          );
        })}
      </StSelect>
    </StRow>
  );
}

export default SelectBox;
