import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "./Layout";

const Router = ({ letterData, setLetterData, setModalState }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home letterData={letterData} setLetterData={setLetterData} setModalState={setModalState} />}
          />
          <Route
            path="detail/:id"
            element={<Detail letterData={letterData} setLetterData={setLetterData} setModalState={setModalState} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
