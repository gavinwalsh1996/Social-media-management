import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DropdownSelect {
  label: string;
  selectItem: string[];
  placeholder: string;
}

export default function DropdownSelect({
  label,
  selectItem,
  placeholder,
}: DropdownSelect) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="select" className="text-sm  text-gray-700 font-bold">
        {label}
      </label>
      <Select>
        <SelectTrigger id="select" className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {selectItem.map((item, index) => (
            <SelectItem value="light" key={index}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
