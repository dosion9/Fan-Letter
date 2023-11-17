import React, { useState } from "react";
import Input from "components/ui/Input";
import Textarea from "components/ui/Textarea";
import Button from "components/ui/Button";
import Container from "components/ui/Container";
import member from "data/member";
import SelectBox from "components/ui/SelectBox";
import validateLetter from "utils/validation";
import Form from "components/ui/Form";

const memberNameList = member.map((n) => n.name);

function HomeForm({ onCreateLetter }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [writedTo, setWritedTo] = useState(memberNameList[0]);

  const handleChangeName = (e) => setNickname(e.target.value);
  const handleChangeContent = (e) => setContent(e.target.value);
  const handleChangeWritedTo = (e) => setWritedTo(e.target.value);

  const handleCreateLetter = (e, nickname, content, writedTo) => {
    const validation = validateLetter(nickname, 10, content, 100);

    if (validation === true) {
      onCreateLetter(nickname, content, writedTo);
      setNickname("");
      setContent("");
      setWritedTo(memberNameList[0]);
      e.preventDefault();
    } else {
      console.log(validation);
      e.preventDefault();
    }
  };

  return (
    <Container>
      <Form color="blue" onSubmit={(e) => handleCreateLetter(e, nickname, content, writedTo)}>
        <Input
          value={nickname}
          placeholder={"최대 10글자까지 작성할 수 있습니다."}
          maxLength={10}
          onChange={handleChangeName}
          labelText={"닉네임"}
        ></Input>

        <SelectBox
          value={writedTo}
          listData={memberNameList}
          onChange={handleChangeWritedTo}
          labelText={"맴버"}
        ></SelectBox>

        <Textarea
          placeholder={"최대 100자까지 작성할 수 있습니다."}
          value={content}
          onChange={handleChangeContent}
          maxLength={100}
          labelText={"내용"}
        ></Textarea>
        <Button>등록하기</Button>
      </Form>
    </Container>
  );
}

export default HomeForm;