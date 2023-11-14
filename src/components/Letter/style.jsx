import styled from "styled-components";
import * as S from "../Common";

export const Letter = styled.section`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  border: 1px solid red;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
  .letter__img-wrap {
    width: 40%;
  }
`;
