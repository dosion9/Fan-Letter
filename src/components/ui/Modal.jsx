import React from "react";
import styled from "styled-components";
import theme from "style/Theme";
import Button from "./Button";

const StDimmer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  top: 0;
  z-index: 10;
  background-color: #000000ce;
  cursor: pointer;
`;

const StModalWrap = styled.div`
  border: 10px double ${(props) => (props?.$color ? theme.color[props.$color] : theme.color.black)};
  background-color: ${theme.color.white};
  width: 60%;
  margin: auto;
  border-radius: ${theme.border.borderRadius};
  overflow: hidden;
  cursor: default;

  .header {
    font-weight: bold;
    background-color: ${(props) => (props?.$color ? theme.color[props.$color] : theme.color.white)};
    font-size: ${theme.fontSize.xl};
    padding: ${theme.spacing.lg} ${theme.spacing.lg};
    color: ${(props) => (props?.$color === "white" ? theme.color[props.$color] : theme.color.white)};
  }

  .body {
    padding: ${theme.spacing.lg};
    display: flex;
    align-items: center;
  }

  .footer {
    text-align: end;
    padding: ${theme.spacing.base};

    * {
      margin-left: ${theme.spacing.base};
    }
  }
`;

const modalType = {
  waring: { header: "주의", color: "pink" },
  alert: { header: "알림", color: "blue" }
};

function Modal({ children, onClose, type }) {
  const close = (e) => {
    e.target.dataset.modal !== "dimmer" ? e.preventDefault() : onClose();
  };

  return (
    <StDimmer data-modal="dimmer" onClick={close}>
      <StModalWrap $color={modalType[type]?.color || "green"} onClick={close}>
        <div className="header">{modalType?.[type].header || type}</div>
        <div className="body">{children}</div>
        <div className="footer">
          <Button $outline={"true"} $color={"blue"} $onClick={onClose}>
            확인
          </Button>
          <Button $outline={"true"} $color={"pink"} $onClick={onClose}>
            취소
          </Button>
        </div>
      </StModalWrap>
    </StDimmer>
  );
}

export default Modal;
