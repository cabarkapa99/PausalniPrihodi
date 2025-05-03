import React, { useState } from "react";
import { motion } from "framer-motion";
import EditEntryModal from "../EditEntryModal/EditEntryModal";

interface TableProps {
  data: { id: string; date: string; amount: number; tag: string }[];
  onDeleteSuccess?: (id: string) => void; // Optional callback to refresh list
}

const Table: React.FC<TableProps> = ({ data, onDeleteSuccess }) => {
  const [toDeleteId, setToDeleteId] = useState<string | null>(null);
  interface Entry {
    id: string;
    date: string;
    amount: number;
    tag: string;
  }

  const [editEntry, setEditEntry] = useState<Entry | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDeleteClick = (id: string) => {
    setToDeleteId(id);
    setIsConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!toDeleteId) return;

    try {
      const res = await fetch(`/api/income/`, {
        method: "DELETE",
        body: JSON.stringify({ id: toDeleteId }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to delete");

      if (onDeleteSuccess) onDeleteSuccess(toDeleteId);
      setIsConfirmOpen(false);
      setToDeleteId(null);
    } catch (error) {
      alert("Greška pri brisanju.");
      console.error(error);
    }
  };

  const sortedData = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-y-scroll h-1/2">
        <table className="w-full table-auto">
          <thead className="bg-teal-800 text-white">
            <tr>
              <th className="text-left py-3 px-4">Datum</th>
              <th className="text-right py-3 px-4">Iznos</th>
              <th className="text-right py-3 px-4">Tag</th>
              <th className="text-right py-3 px-4">Akcija</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((entry, index) => (
              <motion.tr
                key={entry.id}
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
                <td className="py-3 px-4 text-right">{entry.tag || ""}</td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => handleDeleteClick(entry.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Obriši
                  </button>
                  <button
                    onClick={() => setEditEntry(entry)}
                    className="text-blue-500 hover:text-blue-700 ml-2"
                  >
                    Izmeni
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {editEntry && (
        <EditEntryModal
          entry={editEntry}
          onClose={() => setEditEntry(null)}
          onSave={(updated) => {
            if (onDeleteSuccess) onDeleteSuccess(updated.id);
            setEditEntry(null);
          }}
        />
      )}

      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-md text-center w-80">
            <h2 className="text-lg font-semibold mb-4">
              Da li ste sigurni da želite da obrišete?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => {
                  setIsConfirmOpen(false);
                  setToDeleteId(null);
                }}
              >
                Otkaži
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={confirmDelete}
              >
                Obriši
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
