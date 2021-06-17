import React from "react";

export default function BackDrop(props) {
  let showModal = props.isModalOpen;
  console.log(showModal);
  return <div className="backdrop" onClick={props.closeModal} />;
}
