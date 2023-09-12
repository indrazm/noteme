"use client";

import { useContext, useState } from "react";
import { EditorContext } from "./Editor";
import { X } from "lucide-react";

export const Note = ({ id, content }) => {
  const [note, setNote] = useState({ id, content });
  const [onEdit, setOnEdit] = useState(false);
  const { deleteNote, updateNote } = useContext(EditorContext);

  if (content === "") {
    return (
      <textarea
        className="p-4 rounded-xl bg-yellow-300 text-black h-[250px] whitespace-pre-wrap"
        onChange={(e) => setNote({ ...note, content: e.target.value })}
        onBlur={() => {
          updateNote(id, note.content);
          setOnEdit(false);
        }}
        placeholder="Write something"
      >
        {note.content}
      </textarea>
    );
  }

  if (onEdit) {
    return (
      <textarea
        className="p-4 rounded-xl bg-yellow-300 text-black h-[250px] whitespace-pre-wrap"
        onChange={(e) => setNote({ ...note, content: e.target.value })}
        onBlur={() => {
          updateNote(id, note.content);
          setOnEdit(false);
        }}
        placeholder="Write something"
      >
        {note.content}
      </textarea>
    );
  }

  return (
    <div className="p-4 rounded-xl bg-yellow-300 text-black h-[250px] w-full relative group cursor-pointer" onDoubleClick={() => setOnEdit(true)}>
      <div className="whitespace-pre-wrape">{note.content}</div>
      <div
        onClick={() => deleteNote(id)}
        className="absolute group-hover:opacity-100 cursor-pointer opacity-0 z-10 -top-2 -right-2 w-8 h-8 bg-rose-600 text-white p-2 flex justify-center items-center rounded-full"
      >
        <X />
      </div>
    </div>
  );
};
