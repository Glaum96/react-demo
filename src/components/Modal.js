import React from "react";

export default function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure you want to delete {props.title}?</p>
      <button className="btn btn-alt" onClick={props.closeModal}>
        Cancel
      </button>
      <button className="btn" onClick={props.closeModal}>
        Delete
      </button>
    </div>
  );
}
