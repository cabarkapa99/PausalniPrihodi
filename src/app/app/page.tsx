"use client";
import React, { useState, useEffect } from "react";
import AppNavigation from "@/components/AppNavigation/AppNavigation";
import IncomeForm from "@/components/IncomeForm/IncomeForm";
import ProgressBars from "@/components/ProgressBars/ProgressBars";
import Chart from "@/components/Chart/Chart";
import Loader from "@/components/Loader/Loader";
import Table from "@/components/Table/Table";
export default function App() {
  const [value, setValue] = useState("statistika");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<
    { id: string; date: string; amount: number; tag: string }[]
  >([]);

  useEffect(() => {
    setLoading(true);
    fetch("/api/income")
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false));
  }, []);
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-zinc-50 z-10">
      {loading && <Loader />}
      <div className="relative container flex h-screen items-center gap-4">
        <AppNavigation value={value} setValue={setValue} />
        <div className="h-full w-full flex items-center justify-center">
          {value === "statistika" && (
            <div className="flex flex-col items-center gap-4 w-full">
              <ProgressBars data={data} />
              <Chart data={data} />
            </div>
          )}
          {value === "dodaj" && <IncomeForm />}
          {value === "istorija" && <Table data={data} />}
        </div>
      </div>
    </div>
  );
}
