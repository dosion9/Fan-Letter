import React from "react";
import Button from "components/ui/Button";
import member from "data/member";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import theme from "style/Theme";
import Container from "components/ui/Container";

const StContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.base};
  height: 100%;
  align-items: end;
  justify-content: center;
`;

function MemberBtnGroup({ selectMember, onClick }) {
  return (
    <StContainer>
      {member.map((n) => {
        return (
          <Button
            color={n.color}
            outline={"true"}
            size={"lg"}
            active={n.name === selectMember}
            onClick={() => {
              onClick(n.name);
            }}
            key={uuidv4()}
          >
            {n.name}
          </Button>
        );
      })}
    </StContainer>
  );
}

export default MemberBtnGroup;
