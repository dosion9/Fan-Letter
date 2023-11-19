import mockLetterData from "data/mockLetterData";

const initialState = {
  letters: JSON.parse(localStorage.getItem("letter")) ? JSON.parse(localStorage.getItem("letter")) : mockLetterData
};

const letterData = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default letterData;
