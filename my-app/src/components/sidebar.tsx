import React from "react";
import { User } from "lucide-react";

interface MenuItem {
  label: string;
  icon: React.ElementType;
}

interface SideBarProps {
  menuItems: MenuItem[];
}

export const Sidebar = ({ menuItems }: SideBarProps) => {
  return (
    <div className="p-4 flex flex-col items-center h-screen">
      <ul className="flex flex-col gap-4 flex-grow">
        {menuItems.map(({ label, icon: Icon }, key) => (
          <li
            key={key}
            className="flex flex-col items-center gap-2 cursor-pointer 
                  bg-gray-100 rounded-xl px-4 py-3 
                  transition-all duration-300 ease-in-out 
                  hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1"
          >
            {Icon && (
              <Icon className="w-6 h-6 text-gray-600 transition-colors duration-300 hover:text-gray-900" />
            )}
            <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900">
              {label}
            </span>
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer p-3 rounded-full bg-gray-100 
                   transition-all duration-300 ease-in-out 
                   hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1"
      >
        <User className="w-8 h-8 text-gray-600 transition-colors duration-300 hover:text-gray-900" />
      </div>
    </div>
  );
};
