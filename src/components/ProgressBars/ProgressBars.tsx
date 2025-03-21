"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  amount: number;
  value: number; // Progress value (0 to 100)
  color?: string; // Custom color for the bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  amount,
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full max-w-md p-4">
      <div className="mb-2 flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div
        className="w-full h-4 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Progress Bar */}
        <motion.div
          className={`h-full ${color || "bg-blue-500"} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Tooltip (Only shows when hovered) */}
        {isHovered && (
          <motion.div
            className="absolute top-[30px] left-[0%] -translate-x-[50%] bg-black text-white text-xs px-2 py-1 rounded-md shadow-md z-10"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            {amount.toLocaleString()} RSD
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface DataPoint {
  data: { date: string; amount: number }[];
}

const ProgressBars: React.FC<DataPoint> = ({ data }) => {
  const last365Days = data?.filter(
    (item) =>
      new Date(item.date) >=
      new Date(new Date().setFullYear(new Date().getFullYear() - 1))
  );
  const amountOfLast365Days = last365Days?.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  const percentageOfLast365Days = (amountOfLast365Days / 8000000) * 100;
  const currentYear = data?.filter((item) => {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1); // January 1st, 00:00:00
    return new Date(item.date) >= startOfYear;
  });
  const amountOfCurrentYear = currentYear?.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  const percentageOfCurrentYear = (amountOfCurrentYear / 6000000) * 100;
  return (
    <div className="flex flex-col gap-6 items-center justify-center p-6">
      <ProgressBar
        label="Tekuca godina (6mil) "
        value={parseFloat(percentageOfCurrentYear.toFixed(2))}
        color="bg-emerald-500"
        amount={amountOfCurrentYear}
      />
      <ProgressBar
        label="365 dana (8mil) "
        value={parseFloat(percentageOfLast365Days.toFixed(2))}
        color="bg-teal-500"
        amount={amountOfLast365Days}
      />
    </div>
  );
};

export default ProgressBars;
