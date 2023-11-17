import UserImg from "components/letter/UserImg";
import Button from "components/ui/Button";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Textarea from "components/ui/Textarea";
import Modal from "components/ui/Modal";
import { validateText } from "utils/validation";

function Detail({ letterData, setLetterData }) {
  const param = useParams();
  const navigate = useNavigate();
  const [letter, setLetter] = useState({});
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  const [modalType, setModalType] = useState("default");
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const toggleEditMode = () => {
    setContent(letter.content);
    editMode ? setEditMode(false) : setEditMode(true);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const chageLetter = () => {
    const checkChange = letter.content !== content;
    const checkValidation = validateText(content, 100);
    console.log(checkValidation);
    if (checkChange && checkValidation === true) {
      const copy = [...letterData];
      const copyLetter = copy.find((n) => n.id === param.id);
      copyLetter.content = content;
      console.log(copyLetter);
      setLetterData(copy);
      navigate("/");
    } else if (checkValidation !== true) {
      setModalContent(checkValidation);
      setModalActive(true);
    } else {
      setModalContent("변경된 내용이 없습니다.");
      setModalActive(true);
    }
  };

  const deleteLetter = () => {
    onChangeModalType("warning");
    onChangeModalContent("정말로 삭제하시겠습니까?");
    onOpenModal();
  };

  //Modal
  const onChangeModalType = (type) => {
    const changeType = type === "warning" ? "warning" : "default";
    setModalType(changeType);
  };

  const onChangeModalContent = (str) => {
    setModalContent(str);
  };

  const onOpenModal = () => {
    setModalActive(true);
  };

  const onCloseModal = () => {
    setModalActive(false);
  };

  const onSummitModal = () => {
    if (editMode) {
      setModalActive(false);
    } else {
      const copy = letterData.filter((n) => n.id !== param.id);
      setLetterData(copy);
      navigate("/");
    }
  };

  useEffect(() => {
    const findLetter = letterData.find((n) => n.id === param?.id);
    setLetter(findLetter);
    setContent(findLetter.content);
  }, []);

  return (
    <>
      <Modal $type={modalType} active={modalActive} onClose={onCloseModal} onSummit={onSummitModal}>
        {modalContent}
      </Modal>
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
          <Button color="pink" onClick={toggleEditMode}>
            수정 취소
          </Button>
        </>
      ) : (
        <>
          {/* content 수정 안할때 */}
          <Button color="blue" onClick={toggleEditMode}>
            수정
          </Button>
          <Button color="pink" onClick={deleteLetter}>
            삭제
          </Button>
        </>
      )}
    </>
  );
}

export default Detail;
