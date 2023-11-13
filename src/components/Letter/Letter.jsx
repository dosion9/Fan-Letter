import React from "react";

function Letter(props) {
  return (
    <section>
      <div className="letter__img-wrap">
        <img src={props.data.avatar} alt={`${props.data.nickname}의 avatar`} className="letter__img" />
      </div>
      <div className="letter__content">
        <p>
          <span>id : </span>
          {props.data.id}
        </p>
        <h5 className="letter__nickname">{props.data.nickname}</h5>
        <p className="letter__time">{props.data.createdAt}</p>
        <p>{props.data.content}</p>
      </div>
    </section>
  );
}

export default Letter;
