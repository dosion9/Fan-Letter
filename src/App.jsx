import Router from "./shared/Router";
import GlobalStyle from "style/Global";
import { ThemeProvider } from "styled-components";
import theme from "style/Theme";
import Header from "components/Header";
import Footer from "components/Footer";
function App() {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default App;
