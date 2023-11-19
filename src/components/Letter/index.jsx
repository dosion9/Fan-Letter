import React from "react";
import UserImg from "components/letter/UserImg";
import styled from "styled-components";
import theme from "style/Theme";
import { Link } from "react-router-dom";
import { expressLetterDate } from "utils/changeDate";

const StLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StLetter = styled.div`
  width: 100%;
  border: ${(props) => theme.border[props.color] || theme.border.black};
  border-radius: ${theme.border.borderRadius};
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
  padding: ${theme.spacing.base};
  padding-left: calc(${theme.spacing.base}* 2 + 3.5rem);
  position: relative;
  cursor: pointer;
  transition: ${theme.transition.base};
  &:hover {
    ${theme.animationEffect.hover}
  }
`;

const StBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.base};
`;

const StLetterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .userName {
    font-size: ${theme.fontSize.lg};
    font-weight: bold;
  }
  .date {
    color: ${theme.color.black};
    opacity: 0.5;
    font-size: ${theme.fontSize.base};
    line-height: ${theme.fontSize.lg};
  }
`;

const StLetterContent = styled.div`
  .content {
    font-size: ${theme.fontSize.base};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

function Letter({ letterData, color }) {
  const { nickname, avatar, content, createdAt } = { ...letterData };
  return (
    <StLink to={`/detail/${letterData.id}`}>
      <StLetter color={color}>
        <UserImg avatar={avatar} color={color}></UserImg>
        <StBody>
          <StLetterTitle>
            <p className="userName">{nickname || "undefined"}</p>
            <span className="date">{expressLetterDate(createdAt) || "undefined"}</span>
          </StLetterTitle>
          <StLetterContent>
            <p className="content">{content || "undefined"}</p>
          </StLetterContent>
        </StBody>
      </StLetter>
    </StLink>
  );
}

export default Letter;
