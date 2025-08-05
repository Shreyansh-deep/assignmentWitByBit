import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

const EntryList = ({
  entries,
  onEdit,
  onDelete,
  filterStatus,
  filterCategory,
}) => {
  const filteredEntries = entries.filter((entry) => {
    const statusMatch = filterStatus === "all" || entry.status === filterStatus;
    const categoryMatch =
      filterCategory === "all" || entry.category === filterCategory;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="mt-6 max-w-[80%] mx-auto space-y-4">
      <AnimatePresence>
        {filteredEntries.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-800 p-4 rounded-xl shadow-sm text-white"
          >
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => onEdit(entry)}
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-sm transition"
              >
                <FaEdit /> Edit
              </button>
              <button
                onClick={() => onDelete(entry.id)}
                className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-sm transition"
              >
                <FaTrash /> Delete
              </button>
            </div>

            <div className="flex gap-4 text-center items-center">
              <p className="text-sm font-semibold text-purple-400 ">TOPIC : </p>
              <p>{entry.title}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-sm font-semibold text-purple-400">Source : </p>
              <p className="text-sm underline cursor-pointer">{entry.source}</p>
            </div>
            <div className="text-sm text-gray-300 mt-1 flex gap-4 items-center">
              <p className="font-semibold text-purple-400">Notes : </p>
              {entry.notes}
            </div>

            <div className="flex justify-between">
              <div className="flex items-center text-sm text-purple-400 mt-1 gap-4">
                <p className="font-semibold">Status :</p>
                {entry.status && (
                  <p
                    className={`capitalize px-3 py-1 text-xs rounded-full text-black font-semibold ${
                      entry.status === "completed"
                        ? "bg-green-400"
                        : "bg-lime-400"
                    }`}
                  >
                    {entry.status}
                  </p>
                )}
              </div>
              <div className="flex items-center text-xs text-purple-400 mt-1 gap-4">
                <p className="font-semibold">Category :</p>
                <p className="capitalize text-gray-300">{entry.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default EntryList;
