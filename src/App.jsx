import Router from "./shared/Router";
import GlobalStyle from "style/Global";
import { ThemeProvider } from "styled-components";
import theme from "style/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
