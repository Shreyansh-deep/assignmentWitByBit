import React, { useState, useEffect } from "react";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("skillup-entries") || "[]");
    setEntries(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("skillup-entries", JSON.stringify(entries));
  }, [entries]);

  const addOrUpdateEntry = (entry) => {
    if (editingEntry) {
      setEntries((prev) => prev.map((e) => (e.id === entry.id ? entry : e)));
      setEditingEntry(null);
    } else {
      setEntries((prev) => [...prev, { ...entry, id: Date.now() }]);
    }
  };

  const handleEdit = (entry) => setEditingEntry(entry);
  const handleDelete = (id) =>
    setEntries((prev) => prev.filter((entry) => entry.id !== id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white px-4 py-10">
      <h1 className="text-center text-4xl font-bold mb-6">
        Shreyansh’s Skill Up Tracker 🚀
      </h1>

      <div className="flex justify-between mt-14">
        <EntryForm onSubmit={addOrUpdateEntry} editingEntry={editingEntry} />

        <div className="flex-1 max-w-[50%] px-5 ">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-gray-800 text-white px-3 py-2 rounded-md"
            >
              <option value="all">All Status</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-gray-800 text-white px-3 py-2 rounded-md"
            >
              <option value="all">All Categories</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="devops">DevOps</option>
              <option value="soft-skills">Soft Skills</option>
            </select>
          </div>
          <EntryList
            entries={entries}
            onEdit={handleEdit}
            onDelete={handleDelete}
            filterStatus={filterStatus}
            filterCategory={filterCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
