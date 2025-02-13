import React from "react";

interface SideBarProps {
  menuItems: string[];
  icon?: React.ElementType;
}

export const Sidebar = ({ menuItems, icon }: SideBarProps) => {
  return (
    <div className="p-2 flex flex-col items-center ">
      <ul className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
