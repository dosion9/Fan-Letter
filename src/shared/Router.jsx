import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              member={props.member}
              selectedMember={props.selectedMember}
              onChangeMember={props.onChangeMember}
              letterdata={props.letterdata}
              onAddLetter={props.onAddLetter}
            />
          }
        />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
