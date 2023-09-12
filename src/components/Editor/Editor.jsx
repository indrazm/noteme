"use client";

import { createContext, useEffect, useState } from "react";
import { Header } from "./Header";
import { Note } from "./Note";

export const EditorContext = createContext();

export const Editor = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = [...notes];
    newNote.push({ content: "Write something" });
    setNotes(newNote);
    console.log(newNote);
    localStorage.setItem("notes", JSON.stringify(newNote));
  };

  const deleteNote = (id) => {
    const newNote = [...notes];
    newNote.splice(id, 1);
    setNotes(newNote);
    localStorage.setItem("notes", JSON.stringify(newNote));
  };

  const updateNote = (id, content) => {
    const newNote = [...notes];
    newNote[id].content = content;
    setNotes(newNote);
    localStorage.setItem("notes", JSON.stringify(newNote));
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      setNotes(notes);
    }
  }, [notes]);

  return (
    <EditorContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      <main className="space-y-9">
        <Header />
        <main className="grid grid-cols-2 gap-6">
          {notes.map(({ content }, index) => {
            return <Note key={index} id={index} content={content} />;
          })}
        </main>
      </main>
    </EditorContext.Provider>
  );
};
