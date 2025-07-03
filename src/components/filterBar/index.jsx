import React from "react";

export default function FilterBar({ filters, onChange, initialValues = {} }) {
  const handleChange = (key, value) => {
    onChange((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mb-4 bg-white p-4 rounded-md shadow">
      {filters.map((filter) => (
        <div key={filter.key} className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">{filter.label}</label>
          {filter.type === "select" ? (
            <select
              className="border border-gray-300 rounded-md text-sm p-2"
              value={initialValues[filter.key] || ""}
              onChange={(e) => handleChange(filter.key, e.target.value)}
            >
              <option value="">All</option>
              {filter.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              className="border border-gray-300 rounded-md text-sm p-2"
              placeholder={filter.placeholder || `Search ${filter.label}`}
              value={initialValues[filter.key] || ""}
              onChange={(e) => handleChange(filter.key, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
