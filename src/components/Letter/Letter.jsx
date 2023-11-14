import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import UserImg from "./UserImg";
function Letter(props) {
  return (
    <Link to={`/detail/${props.data.id}`}>
      <S.Letter>
        <UserImg avatar={props.data.avatar} nickname={props.data.nickname} />

        <div className="letter__content">
          <p>
            <span>id : </span>
            {props.data.id}
          </p>
          <h5 className="letter__nickname">{props.data.nickname}</h5>
          <p className="letter__time">{props.data.createdAt}</p>
          <p>{props.data.content}</p>
        </div>
      </S.Letter>
    </Link>
  );
}

export default Letter;
