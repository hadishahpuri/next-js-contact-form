import { Contact } from "@/app/types/contact";
import React, { useState } from "react";

type TableColumn = {
  header: string;
  accessor: string;
  unique?: boolean;
};

type TableProps<T> = {
  columns: TableColumn[];
  data: T[];
  rowsPerPage?: number;
  onEdit?: (data: Contact) => void;
};

export default function Table<T extends object>({
  columns,
  data,
  rowsPerPage = 10,
  onEdit = undefined,
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleOnEdit = (contact: Contact) => {
    onEdit?.(contact);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white text-left text-sm">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 font-medium text-gray-700">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-gray-600">
                  {
                    row[column.accessor as keyof T] as
                      | string
                      | number
                      | JSX.Element
                  }
                </td>
              ))}
              <td>
                <button onClick={() => handleOnEdit(row as Contact)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
