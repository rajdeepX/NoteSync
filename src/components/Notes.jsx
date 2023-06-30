import React from "react";

function Notes(props) {
  function deleteNote() {
    props.deleteBtn(props.id);
  }

  return (
    <div className="notes">
      <h3>{props.title}</h3>
      <button onClick={deleteNote} className="delete-btn">
        x
      </button>
      <p>{props.content}</p>
    </div>
  );
}

export default Notes;
