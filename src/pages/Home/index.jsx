import React, { useEffect, useState } from "react";
import Hero from "components/Hero";
import MemberBtnGroup from "./MemberBtnGroup";
import LetterGroup from "./LetterGroup";
import mockLetterDate from "data/mockLetterData";
import HomeForm from "./HomeForm";
import createLetterData from "utils/createLetterData";
import Modal from "components/ui/Modal";

function Home() {
  const [selectMember, setSelectMember] = useState("하니");
  const [letterData, setLetterData] = useState([]);
  const [modalState, setModalState] = useState(false);
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

  const changeModalContent = (str) => setModalContent(str);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  useEffect(() => {
    setLetterData(mockLetterDate);
  }, []);

  return (
    <>
      <Modal type={"waring"} modalState={modalState} onClose={closeModal}>
        {modalContent}
      </Modal>
      <button onClick={openModal}>모달 열기</button>
      <Hero>
        <MemberBtnGroup selectMember={selectMember} onClick={changeSelectMember}></MemberBtnGroup>
      </Hero>
      <HomeForm
        onCreateLetter={createLetter}
        onChangeModalContent={changeModalContent}
        onOpenModal={openModal}
      ></HomeForm>
      <LetterGroup letterData={letterData} selectMember={selectMember}></LetterGroup>
    </>
  );
}

export default Home;
