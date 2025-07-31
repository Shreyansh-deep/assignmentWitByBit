import React, { useState } from "react";

const defaultForm = {
  topic: "",
  resource: "",
  notes: "",
  status: "",
  progress: null,
  category: "Frontend",
};

export default function EntryForm({ onAdd }) {
  const [formData, setFormData] = useState(defaultForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "progress" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.topic.trim() || !formData.resource.trim()) return;

    const newEntry = {
      ...formData,
      id: Date.now(), // simple unique ID
      date: new Date().toLocaleDateString(),
    };

    onAdd(newEntry);
    setFormData(defaultForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black p-6 rounded-2xl shadow-lg mb-8 max-w-2xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Learning Entry</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative w-full">
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="peer w-full p-2 pt-5 border rounded outline-none"
            placeholder=" "
          />
          <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs">
            Topic
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="url"
            name="resource"
            value={formData.resource}
            onChange={handleChange}
            required
            className="peer w-full p-2 pt-5 border rounded outline-none"
            placeholder=" "
          />
          <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs">
            Resource Link
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="number"
            name="progress"
            value={formData.progress}
            onChange={handleChange}
            min="0"
            max="100"
            className="peer w-full p-2 pt-5 border rounded outline-none"
            placeholder=" "
          />
          <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs">
            Progress %
          </label>
        </div>

        <div className="relative w-full">
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="peer w-full p-2 pt-5 border rounded outline-none"
          >
            <option value="">Select Status</option>
            <option value="Learning">Learning</option>
            <option value="Completed">Completed</option>
          </select>
          <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-focus:top-1 peer-focus:text-xs">
            Status
          </label>
        </div>

        <div className="relative w-full">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="peer w-full p-2 pt-5 border rounded outline-none"
          >
            <option value="">Select Category</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="DevOps">DevOps</option>
            <option value="Design">Design</option>
            <option value="Others">Others</option>
          </select>
          <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-focus:top-1 peer-focus:text-xs">
            Category
          </label>
        </div>

        <div className="relative w-full sm:col-span-2">
          <textarea
            name="notes"
            rows="2"
            value={formData.notes}
            onChange={handleChange}
            className="peer w-full p-2 pt-5 border rounded outline-none resize-none"
            placeholder=" "
          />
          <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs">
            Any notes or doubts?
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded"
      >
        Add Entry
      </button>
    </form>
  );
}
