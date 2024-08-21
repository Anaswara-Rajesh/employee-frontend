import React from "react";

function DashboardCard({ text, count, bgColor, icon }) {
  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-md ${bgColor} cursor-pointer w-10/12 h-24 transition-transform transform hover:scale-105`}
    >
      <div className="flex items-center justify-center p-3 bg-white rounded-full shadow-md mr-4 transition-transform transform hover:scale-110">
        {icon && <div className="text-3xl text-gray-700">{icon}</div>}
      </div>

      <div className="flex flex-col justify-center pl-4">
        <h3 className="text-md font-semibold text-gray-600 mb-1 capitalize">{text}</h3>
        <h3 className="text-3xl font-bold text-gray-800">{count}</h3>
      </div>
    </div>
  );
}

export default DashboardCard;
