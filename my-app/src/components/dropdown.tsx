import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownProps {
  triggerText: string;
  label: React.ReactNode[];
  items: string[];
}

const Dropdown = ({ triggerText, label, items }: DropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{triggerText}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="flex items-center gap-2">
          {label.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
