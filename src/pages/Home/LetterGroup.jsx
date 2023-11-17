import React from "react";
import Letter from "components/letter";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import theme from "style/Theme";
import member from "data/member";
import Container from "components/ui/Container";

const StContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

function LetterGroup({ letterData, selectMember }) {
  return (
    <StContainer>
      {letterData
        .filter((n) => n.writedTo === selectMember)
        .map((n) => {
          const color = member.find((m) => m.name === n.writedTo).color;
          return <Letter letterData={n} color={color} key={uuidv4()}></Letter>;
        })}
    </StContainer>
  );
}

export default LetterGroup;
