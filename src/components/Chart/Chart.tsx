import React, { useState } from "react";
import { motion } from "framer-motion";

interface DataPoint {
  data: { date: string; amount: number }[];
}
const Chart: React.FC<DataPoint> = ({ data }) => {
  const [timePeriod, setTimePeriod] = useState<"Month" | "Year">("Month");
  // Process data to calculate monthly and yearly sums
  const monthlyData = data.reduce<{ [key: string]: number }>((acc, curr) => {
    const month = curr.date.slice(0, 7); // Extract "YYYY-MM" from date
    acc[month] = (acc[month] || 0) + curr.amount;
    return acc;
  }, {});

  const yearlyData = data.reduce<{ [key: string]: number }>((acc, curr) => {
    const year = curr.date.slice(0, 4); // Extract "YYYY" from date
    acc[year] = (acc[year] || 0) + curr.amount;
    return acc;
  }, {});

  // Convert objects to arrays for rendering
  const monthlyDataArray = Object.entries(monthlyData).map(
    ([time, amount]) => ({
      time,
      amount,
    })
  );

  const yearlyDataArray = Object.entries(yearlyData).map(([time, amount]) => ({
    time,
    amount,
  }));

  // Select the appropriate data based on the time period
  const sortedData =
    timePeriod === "Month" ? monthlyDataArray : yearlyDataArray;
  const maxAmount = Math.max(...sortedData.map((d) => d.amount)); // Scale axis based on max value

  return (
    <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
      {/* Dropdown to switch time period */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Vremenski prikaz</h2>
        <select
          className="bg-stone-600 rounded-md p-2 text-white text-sm focus:none"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value as "Month" | "Year")}
        >
          <option value="Month">Month</option>
          <option value="Year">Year</option>
        </select>
      </div>

      {/* Chart */}
      <div className="relative w-full h-52 flex items-end space-x-4 border-t border-gray-300 p-4">
        {sortedData.map((point, index) => (
          <motion.div
            key={index}
            className="relative w-8 bg-lime-200 rounded-lg"
            initial={{ height: 0 }}
            animate={{ height: `${(point.amount / maxAmount) * 100 - 10}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute bottom-full mb-2 text-sm text-gray-700 text-center w-full">
              {point.amount.toLocaleString()} {/* Show amount above bar */}
            </div>
            <div className="absolute w-full text-xs text-gray-600 text-center -bottom-5">
              {point.time}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
