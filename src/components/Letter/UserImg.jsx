import React from "react";

function UserImg({ avatar, nickname }) {
  return (
    <div className="letter__img-wrap">
      <img src={avatar} alt={`${nickname}의 avatar`} className="letter__img" />
    </div>
  );
}

export default UserImg;
