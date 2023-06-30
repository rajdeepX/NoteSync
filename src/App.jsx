import React, { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import Notes from "./components/Notes";

function App() {
  let [notes, setNotes] = useState([]);

  function onClick(newNote) {
    setNotes((prevValue) => {
      console.log(newNote);
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <h1>NoteSync</h1>
      <InputArea isClick={onClick} />
      <div className="notes-container">
        {notes.map((noteItem, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              deleteBtn={deleteNotes}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
