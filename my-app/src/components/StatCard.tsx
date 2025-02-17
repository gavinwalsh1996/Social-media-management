import React from "react";

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  amount: number;
  percentage: number;
}

export default function StatCard({
  icon: Icon,
  title,
  amount,
  percentage,
}: StatCardProps) {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-6 rounded-lg">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>

      <div className="flex flex-col text-right">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-2xl font-semibold text-gray-900">{amount}</span>

        <span
          className={`text-sm font-medium ${
            percentage >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {percentage >= 0 ? `+${percentage}%` : `${percentage}%`}
        </span>
      </div>
    </div>
  );
}
