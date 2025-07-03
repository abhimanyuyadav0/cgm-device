import React, { useState, useMemo } from "react";

export default function DynamicDataTable({ columns, data, title, subTitle }) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    const term = search.toLowerCase();
    return data.filter((item) =>
      columns.some(({ key }) => {
        const itemValue = item[key] ? item[key].toString().toLowerCase() : "";
        return itemValue.includes(term);
      })
    );
  }, [data, search, columns]);

  return (
    <div className="p-6 rounded-xl shadow-xl">
      {/* Title + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          {title && (
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          )}
          {subTitle && (
            <p className="text-sm text-gray-500 mt-1">{subTitle}</p>
          )}
        </div>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            className="p-3 pl-12 w-full md:w-80 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="w-5 h-5 absolute left-4 top-3.5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-inner">
        <table className="min-w-full min-h-[300px] divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-indigo-50 to-indigo-50 sticky top-0 z-10">
            <tr>
              {columns.map(({ key, label }) => (
                <th
                  key={key}
                  className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-indigo-50/50 transition-colors duration-200"
              >
                {columns.map(({ key }) => (
                  <td
                    key={key}
                    className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                  >
                    {item[key] ?? (
                      <span className="text-gray-400 italic">-</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td
                  className="px-6 py-4 text-sm text-gray-500 text-center"
                  colSpan={columns.length}
                >
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
