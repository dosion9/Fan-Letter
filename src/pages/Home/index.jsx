import React from "react";
import Hero from "components/Hero";
import Container from "components/ui/Container";
import MemberBtnGroup from "./MemberBtnGroup";
import LetterGroup from "./LetterGroup";
function Home() {
  return (
    <>
      <Hero>
        <MemberBtnGroup></MemberBtnGroup>
      </Hero>
      <LetterGroup></LetterGroup>
    </>
  );
}

export default Home;
