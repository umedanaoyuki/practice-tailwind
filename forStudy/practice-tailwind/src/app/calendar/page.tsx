import React from "react";

const CalendarPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default CalendarPage;
