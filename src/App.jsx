import Router from "./shared/Router";
import { useState } from "react";
import mockLetterDate from "data/mockLetterData";
import GlobalStyle from "style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "style/Theme";
import Modal from "components/ui/Modal";

function App() {
  const [letterData, setLetterData] = useState(mockLetterDate);
  const [modalState, setModalState] = useState({
    type: "default",
    active: false,
    content: null,
    onSummit: null
  });

  // useEffect(() => {
  //   console.log(modalState.onSummit);
  // }, [modalState]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Modal modalState={modalState} setModalState={setModalState} />
        <Router
          letterData={letterData}
          setLetterData={setLetterData}
          modalState={modalState}
          setModalState={setModalState}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
