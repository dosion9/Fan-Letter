import React from "react";
import theme from "style/Theme";
import styled from "styled-components";
import userImg from "assets/img/userImg.png";
const ImgWrap = styled.figure`
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: ${(props) => theme.border[props.color] || theme.border.black};
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

function Avatar({ avatar, color }) {
  const currentAvatar = avatar[0] === "h" ? avatar : userImg;
  return (
    <ImgWrap color={color}>
      <Img src={currentAvatar}></Img>
    </ImgWrap>
  );
}

export default Avatar;
