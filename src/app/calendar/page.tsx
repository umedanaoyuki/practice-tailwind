import { cn } from "@/lib/utils";
import React from "react";

const CalendarPage = () => {
  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
  const days = Array.from({ length: 35 }, (_, i) => i + 1);

  const today = new Date();
  const todayDate = today.getDate();

  return (
    <div className="flex h-screen flex-col bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
      <header className="flex justify-between bg-white p-4">
        <h1 className="bg-linear-to-br from-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent">
          カレンダー
        </h1>
        <div className="flex items-center gap-4">
          <button className="rounded-lg bg-white px-4 py-2 text-purple-600 shadow-sm transition-colors duration-500 hover:bg-purple-50">
            今日
          </button>
          <div className="flex items-center rounded-lg px-4 py-2 shadow-sm">
            <button className="flex h-5 w-5 items-center justify-center rounded-full bg-white transition-colors duration-500 hover:bg-purple-100">
              ←
            </button>
            <span>2024年3月</span>
            <button className="flex h-5 w-5 items-center justify-center rounded-full bg-white transition-colors duration-500 hover:bg-purple-100">
              →
            </button>
          </div>
        </div>
      </header>
      <div className="m-4 grid flex-1 grid-cols-7 rounded-2xl bg-white shadow-xl">
        {weekDays.map((day, i) => {
          return (
            <div
              key={day}
              className={cn(
                "border-b border-solid border-gray-200 bg-gray-50/80 text-center",
                i === 0 && "text-red-500",
                i === 6 && "text-blue-500",
                i !== 0 && i !== 6 && "text-gray-700",
              )}
            >
              {day}
            </div>
          );
        })}
        {days.map((day) => {
          return (
            <div
              key={day}
              className={cn(
                "border-r border-b border-solid border-gray-100 p-2",
                day > 31 ? "bg-gray-50/50" : "bg-white",
                todayDate === day && "ring-2 ring-purple-400 ring-inset",
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full",
                  todayDate === day &&
                    "bg-purple-100 font-bold text-purple-600",
                )}
              >
                {day <= 31 ? day : day - 31}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPage;
