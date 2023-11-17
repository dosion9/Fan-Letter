import React, { useEffect, useState } from "react";
import Input from "components/ui/Input";
import Textarea from "components/ui/Textarea";
import Button from "components/ui/Button";
import Container from "components/ui/Container";
import member from "data/member";
import SelectBox from "components/ui/SelectBox";
import validateLetter from "utils/validation";

const memberNameList = member.map((n) => n.name);

function HomeForm({ onCreateLetter }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [writedTo, setWritedTo] = useState(memberNameList[0]);

  const handleNickNameChange = (e) => setNickname(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handlewritedToChange = (e) => setWritedTo(e.target.value);

  const handleCreateLetter = (e, nickname, content, writedTo) => {
    const validation = validateLetter(nickname, 10, content, 100);

    if (validation === true) {
      onCreateLetter(nickname, content, writedTo);
      e.preventDefault();
    } else {
      console.log(validation);
      e.preventDefault();
    }
  };
  useEffect(() => {
    console.log(writedTo);
  }, [writedTo]);

  return (
    <Container>
      <form onSubmit={(e) => handleCreateLetter(e, nickname, content, writedTo)}>
        <label>
          닉네임
          <Input
            type={"text"}
            value={nickname}
            color={"blue"}
            placeholder={"최대 20글자까지 작성할 수 있습니다."}
            onChange={handleNickNameChange}
            name={"homeForm__nickname"}
          ></Input>
        </label>
        <label>
          <SelectBox listData={memberNameList} onChange={handlewritedToChange} name={"homeForm__writedTo"}></SelectBox>
        </label>

        <br />
        <label>
          내용
          <Textarea
            color={"blue"}
            placeholder={"최대 100자까지 작성할 수 있습니다."}
            value={content}
            onChange={handleContentChange}
            maxlength={100}
            minlength={2}
            name={"homeForm__content"}
          ></Textarea>
        </label>
        <Button color={"blue"}>등록하기</Button>
      </form>
    </Container>
  );
}

export default HomeForm;
