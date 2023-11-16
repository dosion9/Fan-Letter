import React from "react";
import Button from "components/ui/Button";
import member from "data/member";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import theme from "style/Theme";

const StBtnGroupWrap = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: end;
  justify-content: center;
`;

function MemberBtnGroup() {
  return (
    <StBtnGroupWrap>
      {member.map((n) => {
        return (
          <Button $color={n.color} $outline={"true"} $size={"lg"} key={uuidv4()}>
            {n.name}
          </Button>
        );
      })}
    </StBtnGroupWrap>
  );
}

export default MemberBtnGroup;
