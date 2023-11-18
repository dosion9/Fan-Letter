import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Ui from "../pages/Ui";
import Layout from "./Layout";

const Router = ({ letterData, setLetterData, modalState, setModalState }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                letterData={letterData}
                setLetterData={setLetterData}
                modalState={modalState}
                setModalState={setModalState}
              />
            }
          />
          <Route
            path="detail/:id"
            element={
              <Detail
                letterData={letterData}
                setLetterData={setLetterData}
                modalState={modalState}
                setModalState={setModalState}
              />
            }
          />
          <Route path="ui" element={<Ui />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
