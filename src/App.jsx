import Router from "./shared/Router";
import { useState } from "react";
import GlobalStyle from "style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "style/Theme";
import Modal from "components/ui/Modal";
import mockLetterData from "data/mockLetterData";
import { LetterContext } from "context/letterContext";
import { ModalContext } from "context/modalContext";
function App() {
  const [letterData, setLetterData] = useState(mockLetterData);
  const [modalState, setModalState] = useState({
    type: "default",
    active: false,
    content: null,
    onSummit: null
  });

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
