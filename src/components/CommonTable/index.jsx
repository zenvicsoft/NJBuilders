import React from "react";
import { useNavigate } from "react-router-dom";

const CommonTable = ({
  title = "Table",
  tableHeader = [],
  tableData = [],
  enableView = false,
  enableEdit = false,
  enableDelete = false,
  enableDownload = false,
  enableInvoice = false,
  baseURL = "",
  onDelete = () => {},
}) => {
  const navigate = useNavigate();

  const hasActions =
    enableView || enableEdit || enableDelete || enableDownload || enableInvoice;
  const ActionButton = ({ color, icon, title, onClick }) => (
    <button
      title={title}
      onClick={onClick}
      className={`group h-8 w-8 rounded-full border
      border-${color}-500 text-${color}-500
      hover:bg-${color}-500 transition`}
    >
      <i className={`fa-solid ${icon} text-xs group-hover:text-white`} />
    </button>
  );

  return (
    <div className="p-6">
      <div className="rounded-lg border bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-base font-semibold text-gray-800">{title}</h2>

          <div className="flex gap-2">
            {/* add */}
            <button
              className="flex items-center gap-2 rounded-md border px-3 py-2 bg-bg-secondary text-text-primary
                       text-sm hover:bg-bg-primary hover:text-white transition"
              onClick={() => navigate(`${baseURL}/add/`)}
            >
              <i className="fa-solid fa-plus text-xs" />
            </button>
            {/* filter */}
            <button
              className="flex items-center gap-2 rounded-md border px-3 py-2
                       text-sm text-gray-700 hover:bg-gray-50 transition"
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
                {tableHeader.map((h) => (
                  <th
                    key={h.key}
                    className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600"
                  >
                    {h.label}
                  </th>
                ))}

                {hasActions && (
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                    Action
                  </th>
                )}
              </tr>
            </thead>

            <tbody className="divide-y">
              {tableData.length > 0 ? (
                tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition">
                    {tableHeader.map((h) => (
                      <td key={h.key} className="px-6 py-3 text-gray-700">
                        {row[h.key]}
                      </td>
                    ))}

                    {hasActions && (
                      <td className="px-6 py-2">
                        <div className="flex justify-start gap-2">
                          {enableView && (
                            <ActionButton
                              color="green"
                              icon="fa-eye"
                              title="View"
                              onClick={() =>
                                navigate(`${baseURL}/view/${row.uuid}`)
                              }
                            />
                          )}

                          {enableEdit && (
                            <ActionButton
                              color="blue"
                              icon="fa-pen-to-square"
                              title="Edit"
                              onClick={() =>
                                navigate(`${baseURL}/edit/${row.uuid}`)
                              }
                            />
                          )}

                          {enableDelete && (
                            <ActionButton
                              color="red"
                              icon="fa-trash"
                              title="Delete"
                              onClick={() => onDelete(row)}
                            />
                          )}

                          {enableDownload && (
                            <ActionButton
                              color="emerald"
                              icon="fa-download"
                              title="Download"
                              onClick={() =>
                                navigate(`${baseURL}/download/${row.uuid}`)
                              }
                            />
                          )}

                          {enableInvoice && (
                            <ActionButton
                              color="purple"
                              icon="fa-file-invoice"
                              title="Invoice"
                              onClick={() =>
                                navigate(`${baseURL}/invoice/${row.uuid}`)
                              }
                            />
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={tableHeader.length + (hasActions ? 1 : 0)}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommonTable;
