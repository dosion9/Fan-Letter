import React, { useState, useEffect } from "react";
import UserImg from "components/letter/UserImg";
import Button from "components/ui/Button";
import Textarea from "components/ui/Textarea";
import Container from "components/layout/Container";
import { useNavigate, useParams } from "react-router-dom";
import { validateText } from "utils/validation";
import useModal from "hooks/useModal";
import styled from "styled-components";
import theme from "style/Theme";
import { changeDate } from "utils/changeDate";
import useLetter from "hooks/useLetter";

const StRow = styled.div`
  font-size: ${theme.fontSize.lg};
  margin-bottom: ${theme.spacing.base};
  display: flex;

  & b {
    font-weight: bold;
    min-width: 8rem;
    display: inline-block;
  }
`;

const StBtnGroup = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.spacing.base};
  justify-content: center;
`;

function Detail({ letterData, setLetterData, setModalState }) {
  const param = useParams();
  const navigate = useNavigate();
  const [letter, setLetter] = useState({});
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  const letterDate = changeDate(letter.createdAt);
  const { changeModalState, openModal } = useModal(setModalState);
  const { searchLetter, updateLetter, deleteLetter } = useLetter(letterData, setLetterData);
  const activeEditMode = () => setEditMode(true);
  const changeContent = (e) => setContent(e.target.value);
  const inactiveEditMode = () => {
    setContent(letter.content);
    setEditMode(false);
  };

  const onChageLetter = () => {
    const checkChange = letter.content !== content;
    const checkValidation = validateText(content, 300);
    if (checkChange && checkValidation === true) {
      updateLetter({ ...letter, content });
      navigate("/");
    } else if (checkValidation !== true) {
      changeModalState({ content: checkValidation });
      openModal();
    } else {
      changeModalState({ content: "변경된 내용이 없습니다." });
      openModal(true);
    }
  };

  const changeModalStateDelete = () => {
    changeModalState({
      type: "warning",
      content: "정말로 삭제하시겠습니까?",
      onSummit: () => {
        deleteLetter(param.id);
        navigate("/");
      }
    });
    openModal();
  };

  useEffect(() => {
    const letter = searchLetter(param?.id)[0];
    setLetter(letter);
    setContent(letter.content);
  }, [param?.id]);

  return (
    <Container title={"팬레터 수정"}>
      <UserImg color="blue" avatar={letter.avatar}></UserImg>
      <StRow>
        <b>작성자</b>
        {letter.nickname}
      </StRow>

      <StRow>
        <b>작성 시간</b>
        {`${letterDate.year}.${letterDate.month}.${letterDate.date} ${letterDate.hour}:${letterDate.min}`}
      </StRow>
      <StRow>
        <b>To</b>
        {letter.writedTo}
      </StRow>
      <StRow>
        <b>내용</b>
        <Textarea
          value={content}
          onChange={changeContent}
          readOnly={!editMode}
          color={editMode ? "blue" : "white"}
        ></Textarea>
      </StRow>

      {editMode ? (
        <StBtnGroup>
          {/* content 수정 할 때 */}
          <Button color="green" onClick={onChageLetter}>
            수정 완료
          </Button>
          <Button color="pink" onClick={inactiveEditMode}>
            수정 취소
          </Button>
        </StBtnGroup>
      ) : (
        <StBtnGroup>
          {/* content 수정 안할때 */}
          <Button color="blue" onClick={activeEditMode}>
            수정
          </Button>
          <Button color="pink" onClick={changeModalStateDelete}>
            삭제
          </Button>
        </StBtnGroup>
      )}
    </Container>
  );
}

export default Detail;
