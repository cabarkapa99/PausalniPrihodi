import React from "react";
import { motion } from "framer-motion";

interface TableProps {
  data: { date: string; amount: number }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  // Sort data by date (latest first)
  const sortedData = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-y-scroll h-1/2">
      <table className="w-full table-auto">
        {/* Table Header */}
        <thead className="bg-teal-800 text-white">
          <tr>
            <th className="text-left py-3 px-4">Datum</th>
            <th className="text-right py-3 px-4">Iznos</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {sortedData.map((entry, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`border-b last:border-0 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <td className="py-3 px-4 text-gray-700">
                {new Date(entry.date).toLocaleDateString()}
              </td>
              <td className="py-3 px-4 text-right font-semibold">
                {entry.amount.toLocaleString()}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
