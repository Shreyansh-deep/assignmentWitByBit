import React, { useState, useEffect } from "react";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import { saveToLocal, loadFromLocal } from "./utils/localStorage";

function App() {
  const [entries, setEntries] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    const saved = loadFromLocal();
    if (saved) setEntries(saved);
  }, []);

  const addEntry = (entry) => {
    const updated = [entry, ...entries];
    setEntries(updated);
    saveToLocal(updated);
  };

  const deleteEntry = (id) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    saveToLocal(updated);
  };

  const updateEntry = (updatedEntry) => {
    const updated = entries.map((entry) =>
      entry.id === updatedEntry.id ? updatedEntry : entry
    );
    setEntries(updated);
    saveToLocal(updated);
  };

  const filteredEntries = entries.filter((e) => {
    const statusMatch = statusFilter === "All" || e.status === statusFilter;
    const categoryMatch =
      categoryFilter === "All" || e.category === categoryFilter;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        📘 Shrey’s Skill Up Tracker
      </h1>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {["All", "Learning", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              statusFilter === status
                ? "bg-white text-black"
                : "bg-purple-800 text-white hover:bg-purple-700"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["All", "Frontend", "Backend", "DevOps", "Design", "Others"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                categoryFilter === cat
                  ? "bg-white text-black"
                  : "bg-indigo-800 text-white hover:bg-indigo-700"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      <EntryForm onAdd={addEntry} />
      <EntryList
        entries={filteredEntries}
        onDelete={deleteEntry}
        onEdit={updateEntry}
      />
    </div>
  );
}

export default App;
