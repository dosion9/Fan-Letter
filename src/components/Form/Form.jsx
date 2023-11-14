import React, { useState } from "react";
import * as S from "../Common";
function Form(props) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [writedTo, SetWritedTo] = useState(props.selectedMember);
  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    if (nickname === "" || content === "") {
      alert("빈칸을 채워주세여");
    } else if (nickname.length > 10 || content.length > 100) {
      alert("닉네임은 10자 이내, 내용은 100자 이내로 적어주세요");
    } else {
      props.onAddLetter(nickname, content, writedTo);
      SetWritedTo(props.selectedMember);
      setNickname("");
      setContent("");
    }
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select
          name="writedToMember"
          id=""
          onChange={(e) => handleChange(e, SetWritedTo)}
          defaultValue={props.selectedMember}
        >
          {props.member.map((n, i) => (
            <option value={n.name} key={`writedTo-${i}`}>
              {n.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="">
          닉네임
          <input type="text" value={nickname} placeholder="닉네임" onChange={(e) => handleChange(e, setNickname)} />
        </label>
      </div>
      <div>
        <label htmlFor="">
          내용
          <textarea
            type="text"
            value={content}
            placeholder="내용을 적어주세요"
            onChange={(e) => handleChange(e, setContent)}
          ></textarea>
        </label>
      </div>

      <S.Btn $color={"blue"} $outline={true} type="summit">
        등록
      </S.Btn>
    </form>
  );
}

export default Form;