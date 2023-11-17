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

const Wrap = styled.section`
  width: 100%;
  border: 10px double ${(props) => theme?.color[props.color] || theme.color.black};
  border-radius: ${theme.border.borderRadius};
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
  padding: ${theme.spacing.lg};
  padding-left: calc(${theme.spacing.lg}* 2 + 3.5rem);
  position: relative;
  cursor: pointer;
  transition: ${theme.transition.base};
  &:hover {
    ${theme.animationEffect.hover}
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};

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

const Body = styled.div`
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
      <Wrap color={color}>
        <UserImg avatar={avatar} color={color}></UserImg>
        <Header>
          <p className="userName">{nickname || "undefined"}</p>
          <span className="date">{expressLetterDate(createdAt) || "undefined"}</span>
        </Header>
        <Body>
          <p className="content">{content || "undefined"}</p>
        </Body>
      </Wrap>
    </StLink>
  );
}

export default Letter;
