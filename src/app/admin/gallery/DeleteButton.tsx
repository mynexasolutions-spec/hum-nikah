"use client";

import { Trash2 } from "lucide-react";

export default function DeleteButton() {
  return (
    <button
      type="submit"
      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
      title="Delete item"
      onClick={(e) => {
        if (!window.confirm("Are you sure you want to delete this gallery item?")) {
          e.preventDefault();
        }
      }}
    >
      <Trash2 size={16} />
    </button>
  );
}
