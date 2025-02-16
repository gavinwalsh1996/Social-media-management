import React from "react";
import Calendar from "@/components/Calendar";

export default function Plan() {
  return (
    <div className="p-6 flex flex-col gap-6 h-screen">
      <div className="flex-grow overflow-hidden">
        <Calendar />
      </div>
    </div>
  );
}
