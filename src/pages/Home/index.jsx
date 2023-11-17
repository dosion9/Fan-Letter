import React, { useState } from "react";
import Hero from "components/Hero";
import MemberBtnGroup from "./MemberBtnGroup";
import LetterGroup from "./LetterGroup";
import HomeForm from "./HomeForm";
import createLetterData from "utils/createLetterData";
import Modal from "components/ui/Modal";

function Home({ letterData, setLetterData }) {
  const [selectMember, setSelectMember] = useState("하니");
  const [modalType, setModalType] = useState("default");
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const changeSelectMember = (member) => {
    setSelectMember(member);
  };

  const createLetter = (nickname, content, writedTo) => {
    const newLetter = createLetterData(nickname, content, writedTo);
    const copy = [...letterData];
    copy.push(newLetter);
    setLetterData(copy);
  };

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

  const onSummitModal = (func = null) => {
    if (func !== null) {
      func();
    }
    setModalActive(false);
  };

  return (
    <>
      <Modal type={"waring"} $type={modalType} active={modalActive} onSummit={onSummitModal} onClose={onCloseModal}>
        {modalContent}
      </Modal>
      <Hero>
        <MemberBtnGroup selectMember={selectMember} onClick={changeSelectMember}></MemberBtnGroup>
      </Hero>
      <HomeForm
        onCreateLetter={createLetter}
        onChangeModalContent={onChangeModalContent}
        onOpenModal={onOpenModal}
        onChangeModalType={onChangeModalType}
      ></HomeForm>
      <LetterGroup letterData={letterData} selectMember={selectMember}></LetterGroup>
    </>
  );
}

export default Home;
