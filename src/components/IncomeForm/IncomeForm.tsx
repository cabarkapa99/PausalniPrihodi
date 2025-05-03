"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import ConfirmInputModal, {
  IncomeData,
} from "@/components/ConfirmInputModal/ConfirmInputModal";

const IncomeForm = () => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingData, setPendingData] = useState<IncomeData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!value) {
      alert("Value is required");
      return;
    }

    const incomeData: IncomeData = {
      value: parseFloat(value),
      date: date ? date.toISOString().split("T")[0] : "",
      tag: tag.trim() || null,
    };

    setPendingData(incomeData);
    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = async () => {
    if (!pendingData) return;

    try {
      setLoading(true);
      await fetch("/api/income", {
        method: "POST",
        body: JSON.stringify(pendingData),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error);
      alert("Greška pri slanju.");
    } finally {
      setLoading(false);
      setValue("");
      setDate(new Date());
      setTag("");
      setShowConfirmModal(false);
      setPendingData(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Start invisible and slightly above
      animate={{ opacity: 1, y: 0 }} // Fade in and slide down
      exit={{ opacity: 0, y: -20 }} // Fade out and slide up
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
    >
      {loading && <Loader />}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 rounded-lg shadow-md"
      >
        <div className="grid gap-2">
          <Label htmlFor="value">Prihod</Label>
          <Input
            id="value"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            placeholder="Iznos (bez tačke ili zareza)"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="date">Datum Prihoda</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left"
              >
                {date ? format(date, "PPP") : "Izaberite datum"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date!}
                onSelect={(day) => setDate(day || null)}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="tag">Tag (Optional)</Label>
          <Input
            id="tag"
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Faktura, Ugovor, itd."
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-cyan-700 text-white hover:bg-cyan-600"
        >
          Posalji
        </Button>
      </form>
      {showConfirmModal && pendingData && (
        <ConfirmInputModal
          data={pendingData}
          onCancel={() => {
            setShowConfirmModal(false);
            setPendingData(null);
          }}
          onConfirm={handleConfirmSubmit}
          loading={loading}
        />
      )}
    </motion.div>
  );
};

export default IncomeForm;
