import React from "react";

export default function ProgressBar({ percent }) {
  return (
    <div className="mt-2 w-full bg-gray-200 h-3 rounded">
      <div
        className="h-full rounded bg-purple-600 transition-all duration-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
