import Router from "./shared/Router";
import { useEffect, useState } from "react";
import GlobalStyle from "style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "style/Theme";
import Modal from "components/ui/Modal";
import { LetterContext } from "context/letterContext";
import { ModalContext } from "context/modalContext";
import useLetter from "hooks/useLetter";
import mockLetterData from "data/mockLetterData";
function App() {
  const [letterData, setLetterData] = useState(
    JSON.parse(localStorage.getItem("letter")) ? JSON.parse(localStorage.getItem("letter")) : mockLetterData
  );
  const [modalState, setModalState] = useState({
    type: "default",
    active: false,
    content: null,
    onSummit: null
  });
  const { setLocalLetter } = useLetter(letterData, setLetterData);

  useEffect(() => {
    setLocalLetter();
  }, [letterData]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ModalContext.Provider value={{ modalState, setModalState }}>
          <Modal modalState={modalState} setModalState={setModalState} />
          <LetterContext.Provider value={{ letterData, setLetterData }}>
            <Router />
          </LetterContext.Provider>
        </ModalContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
