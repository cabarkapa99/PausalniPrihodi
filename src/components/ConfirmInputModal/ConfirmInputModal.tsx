// components/ConfirmIncomeModal.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { format } from "date-fns";
import React from "react";

export interface IncomeData {
  value: number;
  date: string;
  tag: string | null;
}

interface ConfirmIncomeModalProps {
  data: IncomeData;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

const ConfirmInputModal: React.FC<ConfirmIncomeModalProps> = ({
  data,
  onConfirm,
  onCancel,
  loading = false,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-xl"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">
          Potvrda unosa prihoda
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Iznos:</strong> {data.value.toLocaleString()} RSD
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Datum:</strong> {format(new Date(data.date), "dd.MM.yyyy")}
        </p>
        {data.tag && (
          <p className="text-gray-700 mb-4">
            <strong>Tag:</strong> {data.tag}
          </p>
        )}
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="secondary" onClick={onCancel} disabled={loading}>
            Otkaži
          </Button>
          <Button onClick={onConfirm} disabled={loading}>
            {loading ? "Slanje..." : "Potvrdi"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmInputModal;
