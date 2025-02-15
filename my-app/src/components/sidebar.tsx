import React from "react";
import { User } from "lucide-react";
import Link from "next/link";
// import Dropdown from "./dropdown";
// import { CirclePlus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MenuItem {
  label: string;
  icon: React.ElementType;
  tooltipText: string;
  dashboardId: string;
}

interface SideBarProps {
  menuItems: MenuItem[];
}

export const Sidebar = ({ menuItems }: SideBarProps) => {
  return (
    <div className="p-4 flex flex-col items-center h-screen">
      <ul className="flex flex-col gap-4 flex-grow">
        {menuItems.map(
          ({ label, icon: Icon, tooltipText, dashboardId }, index) => (
            <Link href={`/dashboard/${dashboardId}`} key={index}>
              <li
                className="flex flex-col items-center gap-2 cursor-pointer 
                  bg-gray-100 rounded-xl px-4 py-3 
                  transition-all duration-300 ease-in-out 
                  hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className="cursor-pointer p-3 rounded-full bg-gray-100 
                               transition-all duration-300 ease-in-out 
                               hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1"
                      >
                        {Icon && (
                          <Icon className="w-6 h-6 text-gray-600 transition-colors duration-300 hover:text-gray-900" />
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tooltipText}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900">
                  {label}
                </span>
              </li>
            </Link>
          )
        )}
      </ul>
      <Link href="/dashboard/profile">
        <div className="mt-auto cursor-pointer p-3 rounded-full bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <User className="w-8 h-8 text-gray-600 transition-colors duration-300 hover:text-gray-900" />
              </TooltipTrigger>
              <TooltipContent>
                <p>profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Link>
    </div>
  );
};
