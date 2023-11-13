import { useEffect, useState } from "react";
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
  const [letterdata, setLetterData] = useState(mockLetterData);
  const handleChangeMember = (string) => setSelectedMember(string);
  const handleAddLetterData = (nickname, content, writedTo = selectedMember) => {
    const data = {
      createdAt: new Date().toDateString(),
      nickname: nickname,
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
      content: content,
      writedTo: writedTo,
      id: uuidv4()
    };
    const copy = [...letterdata];
    copy.push(data);
    setLetterData(copy);
  };
  useEffect(() => {
    console.log(selectedMember);
  }, [selectedMember]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router
          member={member}
          selectedMember={selectedMember}
          onChangeMember={handleChangeMember}
          onAddLetter={handleAddLetterData}
          letterdata={letterdata}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
