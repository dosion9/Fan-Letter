import UserImg from "components/letter/UserImg";
import Button from "components/ui/Button";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Textarea from "components/ui/Textarea";
import { validateText } from "utils/validation";
import useModal from "hooks/useModal";

function Detail({ letterData, setLetterData, setModalState }) {
  const param = useParams();
  const navigate = useNavigate();
  const [letter, setLetter] = useState({});
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { changeModalState, openModal } = useModal(setModalState);

  const activeEditMode = () => setEditMode(true);
  const inactiveEditMode = () => {
    setContent(letter.content);
    setEditMode(false);
  };

  const changeContent = (e) => setContent(e.target.value);

  const chageLetter = () => {
    const checkChange = letter.content !== content;
    const checkValidation = validateText(content, 300);
    if (checkChange && checkValidation === true) {
      const copy = [...letterData];
      const copyLetter = copy.find((n) => n.id === param.id);
      copyLetter.content = content;

      setLetterData(copy);
      navigate("/");
    } else if (checkValidation !== true) {
      changeModalState({ content: checkValidation });
      openModal();
    } else {
      changeModalState({ content: "변경된 내용이 없습니다." });
      openModal(true);
    }
  };

  const onSummitModal = () => {
    const copy = letterData.filter((n) => n.id !== param.id);
    setLetterData(copy);
    navigate("/");
  };

  const changeModalStateDelete = () => {
    changeModalState({
      type: "warning",
      content: "정말로 삭제하시겠습니까?",
      onSummit: onSummitModal
    });
    openModal();
  };

  useEffect(() => {
    const findLetter = letterData.find((n) => n.id === param?.id);
    setLetter(findLetter);
    setContent(findLetter.content);
  }, [param?.id]);

  return (
    <>
      {letter.nickname}
      <UserImg color="blue" avatar={letter.avatar}></UserImg>
      <p>To: {letter.writedTo}</p>
      <Textarea value={content} onChange={changeContent} readOnly={!editMode}></Textarea>
      {editMode ? (
        <>
          {/* content 수정 할 때 */}
          <Button color="green" onClick={chageLetter}>
            수정 완료
          </Button>
          <Button color="pink" onClick={inactiveEditMode}>
            수정 취소
          </Button>
        </>
      ) : (
        <>
          {/* content 수정 안할때 */}
          <Button color="blue" onClick={activeEditMode}>
            수정
          </Button>
          <Button color="pink" onClick={changeModalStateDelete}>
            삭제
          </Button>
        </>
      )}
    </>
  );
}

export default Detail;
