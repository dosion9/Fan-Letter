import { useState } from "react";
import Router from "./shared/Router";
import GlobalStyle from "style/Global";
import { ThemeProvider } from "styled-components";
import theme from "style/Theme";
import { v4 as uuidv4 } from "uuid";

// JSON DATA
import member from "assets/data/member";
import mockLetterData from "assets/data/mockLetterData";
function App() {
  const [selectedMember, setSelectedMember] = useState(member[0].name);
  const [letterData, setLetterData] = useState(mockLetterData);

  const handleChangeMember = (string) => setSelectedMember(string);
  const handleDeleteLetter = (id) => {
    const copy = [...letterData];
    const index = copy.findIndex((n) => n.id === id);
    copy.splice(index, 1);
    setLetterData(copy);
  };

  const handleChangeLetter = (id, content) => {
    const copy = [...letterData];
    const index = copy.findIndex((n) => n.id === id);
    copy[index].content = content;
    setLetterData(copy);
  };
  const handleAddLetterData = (nickname, content, writedTo = selectedMember) => {
    const data = {
      createdAt: new Date().toDateString(),
      nickname: nickname,
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
      content: content,
      writedTo: writedTo,
      id: uuidv4()
    };
    const copy = [...letterData];
    copy.push(data);
    setLetterData(copy);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router
          member={member}
          selectedMember={selectedMember}
          onChangeMember={handleChangeMember}
          onAddLetter={handleAddLetterData}
          letterData={letterData}
          onChangeLetter={handleChangeLetter}
          onDeleteLetter={handleDeleteLetter}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
