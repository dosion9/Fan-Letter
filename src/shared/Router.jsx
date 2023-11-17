import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Ui from "../pages/Ui";
import { useState, useEffect } from "react";
import mockLetterDate from "data/mockLetterData";

const Router = () => {
  const [letterData, setLetterData] = useState([]);

  useEffect(() => {
    setLetterData(mockLetterDate);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home letterData={letterData} setLetterData={setLetterData} />} />
        <Route path="detail/:id" element={<Detail letterData={letterData} setLetterData={setLetterData} />} />
        <Route path="ui" element={<Ui />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
