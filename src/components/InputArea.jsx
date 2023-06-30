import React, { useState } from "react";

function InputArea(props) {
  let [note, setNote] = useState({
    title: "",
    content: "",
  });

  function isClicked(event) {
    let { name, value } = event.target;
    setNote((prevValue) => {
      if (name === "title") {
        return { title: value, content: prevValue.content };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }

  function onAdd() {
    props.isClick(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="input-area">
      <input
        onChange={isClicked}
        name="title"
        type="text"
        placeholder="Title"
        value={note.title}
      />
      <textarea
        onChange={isClicked}
        name="content"
        rows="1"
        placeholder="Take a note..."
        value={note.content}
      ></textarea>
      <button onClick={onAdd} className="add-btn">
        Add
      </button>
    </div>
  );
}

export default InputArea;
