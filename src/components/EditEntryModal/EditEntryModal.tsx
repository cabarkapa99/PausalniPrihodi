// components/EditEntryModal.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

export interface Entry {
  id: string;
  date: string;
  amount: number;
  tag: string | null;
}

interface EditEntryModalProps {
  entry: Entry;
  onClose: () => void;
  onSave: (updated: Entry) => void;
}

const EditEntryModal: React.FC<EditEntryModalProps> = ({
  entry,
  onClose,
  onSave,
}) => {
  const [form, setForm] = React.useState<Entry>(entry);

  const handleChange = (field: keyof Entry, value: string) => {
    setForm({
      ...form,
      [field]: field === "amount" ? parseFloat(value) : value,
    });
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`/api/income/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Update failed");

      onSave(form);
    } catch (err) {
      alert("Greška pri izmeni.");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl p-6 w-[95%] max-w-md shadow-xl"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">Izmeni unos</h2>
        <div className="space-y-4">
          <div>
            <Label>Datum</Label>
            <Input
              type="date"
              value={form.date.split("T")[0]}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>
          <div>
            <Label>Iznos</Label>
            <Input
              type="number"
              value={form.amount}
              onChange={(e) => handleChange("amount", e.target.value)}
            />
          </div>
          <div>
            <Label>Tag</Label>
            <Input
              value={form.tag || ""}
              onChange={(e) => handleChange("tag", e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="secondary" onClick={onClose}>
              Otkaži
            </Button>
            <Button onClick={handleSave}>Sačuvaj</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EditEntryModal;
