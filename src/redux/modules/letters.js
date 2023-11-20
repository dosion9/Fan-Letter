import mockLetterData from "data/mockLetterData";
import { v4 as uuidv4 } from "uuid";
import userImg from "assets/img/userImg.png";

const CREATE_LETTER = "letters/CREATE_LETTER";
const SELECT_LETTER = "letters/SELECT_LETTER";
const UPDATE_LETTER = "letters/UPDATE_LETTER";
const DELETE_LETTER = "letters/DELETE_LETTER";

export const createLetter = (payload) => {
  return {
    type: CREATE_LETTER,
    payload: payload
  };
};

export const selectLetter = (payload) => {
  return {
    type: SELECT_LETTER,
    payload
  };
};

export const updateLetter = (payload) => {
  return {
    type: UPDATE_LETTER,
    payload
  };
};

export const deleteLetter = (payload) => {
  return {
    type: DELETE_LETTER,
    payload
  };
};

const initialState = {
  letters: JSON.parse(localStorage.getItem("letter")) || mockLetterData,
  selectedLetters: []
};

const letterData = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LETTER:
      const { nickname, content, writedTo } = action.payload;
      const letter = {
        createdAt: new Date().toISOString(),
        nickname,
        avatar: userImg,
        content,
        writedTo,
        id: uuidv4()
      };
      return { ...state, letters: [...state.letters, letter] };
    case SELECT_LETTER:
      const selectedInfo = action.payload;
      const selectedLetters = state.letters.filter((n) => n.writedTo === selectedInfo || n.id === selectedInfo);

      return { ...state, selectedLetters: [...selectedLetters] };
    case UPDATE_LETTER:
      const updatedLetters = state.letters.map((n) => (n.id === action.payload.id ? action.payload : n));
      return { ...state, letters: [...updatedLetters] };
    case DELETE_LETTER:
      const deletedLetters = state.letters.filter((n) => n.id !== action.payload);
      return { ...state, letters: [...deletedLetters] };
    default:
      return state;
  }
};

export default letterData;
