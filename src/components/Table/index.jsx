import React from "react";

const Table = () => {
  const tableData = [
    { id: 1, name: "Mark", email: "mark@example.com" },
    { id: 2, name: "Jacob", email: "jacob@example.com" },
    { id: 3, name: "Larry", email: "larry@example.com" },
  ];

  return (
    <div className="p-6">
      <div className="rounded-lg border bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          {/* Title */}
          <h2 className="text-base font-semibold text-gray-800">Basic Table</h2>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-md border
                 px-3 py-2 text-sm font-medium text-gray-700
                 hover:bg-gray-50 hover:text-gray-900
                 transition"
              title="Filter"
            >
              <i className="fa-solid fa-filter text-xs" />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {tableData.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  {/* User */}
                  <td className="px-6 py-3 font-medium text-gray-800">
                    {user.name}
                  </td>

                  {/* Email */}
                  <td className="px-6 py-3 text-gray-600">{user.email}</td>

                  {/* Actions */}
                  <td className="px-6 py-2">
                    <div className="flex justify-start gap-2">
                      {/* View */}
                      <button
                        className="group h-8 w-8 rounded-full border border-green-500
                                   text-green-500 hover:bg-green-500 transition"
                        title="View"
                      >
                        <i className="fa-solid fa-eye text-xs group-hover:text-white" />
                      </button>

                      {/* Edit */}
                      <button
                        className="group h-8 w-8 rounded-full border border-blue-500
                                   text-blue-500 hover:bg-blue-500 transition"
                        title="Edit"
                      >
                        <i className="fa-solid fa-pen-to-square text-xs group-hover:text-white" />
                      </button>

                      {/* Delete */}
                      <button
                        className="group h-8 w-8 rounded-full border border-red-500
                                   text-red-500 hover:bg-red-500 transition"
                        title="Delete"
                      >
                        <i className="fa-solid fa-trash text-xs group-hover:text-white" />
                      </button>

                      {/* Download */}
                      <button
                        className="group h-8 w-8 rounded-full border border-emerald-500
                                   text-emerald-500 hover:bg-emerald-500 transition"
                        title="Download"
                      >
                        <i className="fa-solid fa-download text-xs group-hover:text-white" />
                      </button>

                      {/* Invoice */}
                      <button
                        className="group h-8 w-8 rounded-full border border-purple-500
                                   text-purple-500 hover:bg-purple-500 transition"
                        title="Invoice"
                      >
                        <i className="fa-solid fa-file-invoice text-xs group-hover:text-white" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
