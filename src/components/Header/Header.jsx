import React from "react";
import * as S from "./style";
import Hero from "components/Hero/Hero";

function Header({ member, selectedMember, onChangeMember }) {
  return (
    <header>
      <S.Container>
        {member.map((n, i) => (
          <S.Btn
            $color={n.color}
            $size={"lg"}
            $outline={"true"}
            key={`member${i}`}
            selectedMember={selectedMember}
            $onClick={() => onChangeMember(n.name)}
            $active={selectedMember === n.name ? true : false}
          >
            {n.name}
          </S.Btn>
        ))}
      </S.Container>
    </header>
  );
}

export default Header;
