import React, { useState } from "react";
import Hero from "components/Hero";
import MemberBtnGroup from "./MemberBtnGroup";
import LetterGroup from "./LetterGroup";
import HomeForm from "./HomeForm";
import createLetterData from "utils/createLetterData";

function Home({ letterData, setLetterData, setModalState }) {
  const [selectMember, setSelectMember] = useState("하니");

  const changeSelectMember = (member) => {
    setSelectMember(member);
  };

  const createLetter = (nickname, content, writedTo) => {
    const newLetter = createLetterData(nickname, content, writedTo);
    const copy = [...letterData];
    copy.push(newLetter);
    setLetterData(copy);
  };

  return (
    <>
      <Hero>
        <MemberBtnGroup selectMember={selectMember} onClick={changeSelectMember}></MemberBtnGroup>
      </Hero>
      <HomeForm onCreateLetter={createLetter} setModalState={setModalState}></HomeForm>
      <LetterGroup letterData={letterData} selectMember={selectMember}></LetterGroup>
    </>
  );
}

export default Home;
