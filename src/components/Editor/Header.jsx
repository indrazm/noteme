"use client";

import { useContext } from "react";
import { EditorContext } from "./Editor";
import { PlusIcon } from "lucide-react";

export const Header = (notes) => {
  const { addNote } = useContext(EditorContext);

  return (
    <header className="flex justify-between items-center">
      <div className="font-bold tracking-tight">Noteme.</div>
      <button onClick={() => addNote(notes)} className="w-8 h-8 bg-indigo-600 text-white p-2 flex justify-center items-center rounded-full">
        <PlusIcon />
      </button>
    </header>
  );
};
