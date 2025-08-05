import { useEffect, useState } from "react";

const EntryForm = ({ onSubmit, editingEntry, className }) => {
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("")
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("in-progress");
  const [category, setCategory] = useState("frontend");

  useEffect(() => {
    if (editingEntry) {
      setTitle(editingEntry.title);
      setSource(editingEntry.source)
      setNotes(editingEntry.notes);
      setStatus(editingEntry.status);
      setCategory(editingEntry.category);
    }
  }, [editingEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newEntry = {
      id: editingEntry?.id || Date.now(),
      title,
      source,
      notes,
      status,
      category,
    };

    onSubmit(newEntry);
    setTitle("");
    setSource("")
    setNotes("");
    setStatus("in-progress");
    setCategory("frontend");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg flex-1"
    >
      <div className="relative">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Learning Topic"
          className="w-full bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring focus:ring-purple-500"
        />
        {title && (
          <label className="absolute top-0 left-3 text-xs text-purple-400">
            Learning Topic
          </label>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Learning Source"
          className="w-full bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring focus:ring-purple-500"
        />
        {source && (
          <label className="absolute top-0 left-3 text-xs text-purple-400">
            Learning Source
          </label>
        )}
      </div>

      <div className="relative">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes / Summary"
          className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none focus:outline-none focus:ring focus:ring-purple-500"
          rows={3}
        />
        {notes && (
          <label className="absolute top-0 left-3 text-xs text-purple-400">
            Notes
          </label>
        )}
      </div>

      <div className="flex gap-4 flex-wrap">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="flex-1 bg-gray-800 text-white px-4 py-2 rounded"
        >
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 bg-gray-800 text-white px-4 py-2 rounded"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="devops">DevOps</option>
          <option value="soft-skills">Soft Skills</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-200 text-white font-semibold py-2 px-4 rounded"
      >
        {editingEntry ? "Update Entry" : "Add Entry"}
      </button>
    </form>
  );
};

export default EntryForm;
