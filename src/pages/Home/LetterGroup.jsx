import React from "react";
import Letter from "components/letter";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import theme from "style/Theme";
import member from "data/member";

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.base};
`;

const StRow = styled.p`
  padding: ${theme.spacing.xl} 0;
  text-align: center;
`;

function LetterGroup({ letterData, selectMember }) {
  return (
    <StWrap>
      {letterData
        .filter((n) => n.writedTo === selectMember)
        .map((n) => {
          const color = member.find((m) => m.name === n.writedTo).color;
          return <Letter letterData={n} color={color} key={uuidv4()}></Letter>;
        })}
      {letterData.filter((n) => n.writedTo === selectMember).length === 0 ? (
        <StRow>😥 등록된 팬레터가 없습니다 😥</StRow>
      ) : null}
    </StWrap>
  );
}

export default LetterGroup;
