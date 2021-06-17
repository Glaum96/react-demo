import React from "react";
import Modal from "./Modal";
import BackDrop from "./BackDrop";
import { useState } from "react";

export default function Todo(props) {

    let [isModalOpen, setModalOpen] = useState(false);

    const deleteHandler = (event) => {
    console.log("DEleted. " + props.text);
    openModal();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card">
      <h2>TITLE</h2>
      <div className="actions">
        <span>{props.text}</span>
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {isModalOpen && <Modal title={props.text } closeModal={closeModal} />}
      {isModalOpen && <BackDrop closeModal={closeModal} />}
    </div>
  );
}
