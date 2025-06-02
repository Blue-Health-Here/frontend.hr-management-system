"use client";

import React from 'react';

type Column = {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
};

type DataTableProps = {
  columns: Column[];
  data: any[];
};

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto rounded-b-2xl">
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="py-4 px-6 whitespace-nowrap text-sm text-gray-500"
                >
                  {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
