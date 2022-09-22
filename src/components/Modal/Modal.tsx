import {useState} from 'react';
import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"


export interface ModalProps {
    buttonType: "button" | "submit" | "reset" | undefined;
    buttonText: string;
    htmlTextModal: string;
    modalIsActive:boolean;
    handleActiveModal:React.Dispatch<React.SetStateAction<boolean>>;
  }

function Modal(props: ModalProps) {
  const {
    buttonType,
    buttonText,
    htmlTextModal,
    modalIsActive,
    handleActiveModal,
  } = props


  const handleClick = () => {
    handleActiveModal(!modalIsActive)
  }
  

  if (!modalIsActive) {
    return (
      <button type={buttonType} onClick={handleClick}>
        {buttonText}
      </button>
    )
  }
  return ReactDOM.createPortal(
    <>
      <div className="backModal">
        <div className="modal">
          {htmlTextModal}
          <button
            className="modal--button"
            onKeyDown={handleClick}
            onClick={handleClick}
          >
            X
          </button>
        </div>
      </div>
    </>,
    document.body
  )
}

export default Modal

