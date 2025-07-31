import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function EntryList({ entries, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (entry) => {
    setEditingId(entry.id);
    setEditData({ ...entry });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    onEdit({ ...editData, progress: Number(editData.progress) });
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto grid gap-6">
      {entries.map((entry) => {
        const isEditing = editingId === entry.id;

        return (
          <div
            key={entry.id}
            className="bg-white text-black p-4 rounded-xl shadow flex flex-col gap-4"
          >
            {isEditing ? (
              <>
                <input
                  name="topic"
                  value={editData.topic}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
                <input
                  name="resource"
                  value={editData.resource}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
                <textarea
                  name="notes"
                  value={editData.notes}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
                <select
                  name="status"
                  value={editData.status}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="Learning">Learning</option>
                  <option value="Completed">Completed</option>
                </select>
                <select
                  name="category"
                  value={editData.category}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Design">Design</option>
                  <option value="Others">Others</option>
                </select>

                <input
                  name="progress"
                  type="number"
                  value={editData.progress}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
                <div className="flex gap-2">
                  <button
                    onClick={saveEdit}
                    className="bg-green-600 text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-400 text-white px-4 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-purple-800">
                  {entry.topic}
                </h3>
                <p className="text-sm">📅 {entry.date}</p>
                <p className="text-sm text-indigo-600">📂 {entry.category}</p>
                <a
                  href={entry.resource}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  View Resource
                </a>
                {entry.notes && <p className="text-sm">📝 {entry.notes}</p>}
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    entry.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {entry.status}
                </span>
                <ProgressBar percent={entry.progress} />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => startEdit(entry)}
                    className="bg-blue-600 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(entry.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
