import React from "react";

interface ProgressBarProps {
  label: string;
  current: number;
  total: number;
}

const ProgressBar = ({ label, current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{Math.round(progress)}%</span>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2">
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-blue-600 text-xs leading-none py-1 text-center text-white rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
