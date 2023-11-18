import React from "react";
import theme from "style/Theme";
import styled from "styled-components";

const ImgWrap = styled.figure`
  position: absolute;
  top: ${theme.spacing.base};
  left: ${theme.spacing.base};
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: ${(props) => theme.border[props.color] || theme.border.black};
  overflow: hidden;
`;

const Img = styled.img.attrs((props) => ({
  src: props.$avatar
}))`
  width: 100%;
  height: 100%;
`;

function UserImg({ avatar, color }) {
  return (
    <ImgWrap color={color}>
      <Img $avatar={avatar}></Img>
    </ImgWrap>
  );
}

export default UserImg;
