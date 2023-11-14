import React from "react";
import Header from "components/Header/Header";
import Letter from "components/Letter/Letter";
import Form from "components/Form/Form";
import * as S from "components/Header/style";
function Home(props) {
  return (
    <div>
      <Header
        member={props.member}
        selectedMember={props.selectedMember}
        onChangeMember={props.onChangeMember}
      ></Header>
      <Form member={props.member} selectedMember={props.selectedMember} onAddLetter={props.onAddLetter}></Form>
      <S.Container>
        {props.letterData
          .filter((m) => m.writedTo === props.selectedMember)
          .map((n, i) => {
            return <Letter data={n} key={`letter-${i}`}></Letter>;
          })}
      </S.Container>
    </div>
  );
}

export default Home;
