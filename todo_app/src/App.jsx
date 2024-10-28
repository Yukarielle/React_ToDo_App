import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (title && content && dateTime) {
      const newNote = {
        id: Date.now(),
        title,
        content,
        dateTime,
      };
      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');
      setDateTime('');
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="app">
      <div className="note-input">
        <input
          type="text"
          placeholder="Bezeichnung"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Inhalt"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <button onClick={handleAddNote}>Neue Notiz</button>
      </div>
      
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <div className="note-header">
              <h3>{note.title}</h3>
              <button onClick={() => handleDeleteNote(note.id)}>Löschen</button>
            </div>
            <p>{note.content}</p>
            <small>{note.dateTime}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
 