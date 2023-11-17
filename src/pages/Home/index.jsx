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
  const handleClick = (member) => {
    setSelectMember(member);
  };

  const handleCreateLetter = (nickname, content, writedTo) => {
    const newLetter = createLetterData(nickname, content, writedTo);
    const copy = [...letterData];
    copy.push(newLetter);
    setLetterData(copy);
  };
  useEffect(() => {
    setLetterData(mockLetterDate);
  }, []);

  return (
    <>
      <Modal type={"waring"}></Modal>
      <Hero>
        <MemberBtnGroup selectMember={selectMember} onClick={handleClick}></MemberBtnGroup>
      </Hero>
      <HomeForm onCreateLetter={handleCreateLetter}></HomeForm>
      <LetterGroup letterData={letterData} selectMember={selectMember}></LetterGroup>
    </>
  );
}

export default Home;
