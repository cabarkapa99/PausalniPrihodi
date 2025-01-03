"use client";
import React, { useState } from "react";
import AppNavigation from "@/components/AppNavigation/AppNavigation";
export default function App() {
  const [value, setValue] = useState("statistika");
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-zinc-50">
      <div className="container flex h-screen items-center gap-4">
        <AppNavigation value={value} setValue={setValue} />
        <div className="bg-blue-500 h-20 w-full"></div>
      </div>
    </div>
  );
}
