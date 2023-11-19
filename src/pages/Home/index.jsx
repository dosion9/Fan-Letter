import React, { useState } from "react";
import Hero from "components/ui/Hero";
import MemberBtnGroup from "./MemberBtnGroup";
import LetterGroup from "./LetterGroup";
import HomeForm from "./HomeForm";
import { createLetterData } from "utils/letterData";
import Container from "components/layout/Container";

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
      <Hero />
      <Container color={"blue"} title={"팬레터 작성"}>
        <HomeForm onCreateLetter={createLetter} setModalState={setModalState}></HomeForm>
      </Container>
      <Container color={"blue"} title={"팬레터 목록"}>
        <MemberBtnGroup selectMember={selectMember} onClick={changeSelectMember}></MemberBtnGroup>
        <LetterGroup letterData={letterData} selectMember={selectMember}></LetterGroup>
      </Container>
    </>
  );
}

export default Home;
