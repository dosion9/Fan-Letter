import React, { useEffect, useState } from "react";
import UserImg from "./UserImg";
import * as S from "../Common";
function DetailLetter({ letterItem, onChangeLetter, onDeleteLetter }) {
  const [editState, setEditState] = useState(false);
  const [content, setContent] = useState(letterItem.content);
  const handleChangeContent = (e) => setContent(e.target.value);
  const handleToggleEditState = (boolean) => setEditState(boolean);

  const handleContentChange = () => {
    if (letterItem.content === content) {
      alert("수정된 내용이 없습니다.");
    } else {
      onChangeLetter(letterItem.id, content);
      setEditState(false);
    }
  };

  useEffect(() => {
    const textContent = letterItem.content;
    console.log(textContent);

    // setContent(textContent);
  }, []);

  return (
    <>
      <UserImg avatar={letterItem.avatar} nickname={letterItem.nickname} />
      <p>
        <span>id : </span>
        {letterItem.id}
      </p>
      <h5 className="letter__nickname">{letterItem.nickname}</h5>
      <p className="letter__time">{letterItem.createdAt}</p>

      {editState ? (
        <>
          <textarea
            name=""
            cols="30"
            rows="10"
            value={content}
            placeholder={letterItem.content}
            onChange={handleChangeContent}
          />
        </>
      ) : (
        <p>{letterItem.content}</p>
      )}
      <div>
        {editState ? (
          <>
            <S.Btn $color={"blue"} $outline={true} $onClick={handleContentChange}>
              수정 완료
            </S.Btn>
            <S.Btn $color={"blue"} $outline={true} $onClick={() => handleToggleEditState(false)}>
              수정 취소
            </S.Btn>
          </>
        ) : (
          <>
            <S.Btn
              $color={"blue"}
              $outline={true}
              $onClick={() => {
                handleToggleEditState(true);
              }}
            >
              수정
            </S.Btn>

            <S.Btn $color={"blue"} $outline={true} $onClick={null}>
              삭제
            </S.Btn>
          </>
        )}
      </div>
    </>
  );
}

export default DetailLetter;
