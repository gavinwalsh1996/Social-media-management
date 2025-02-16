import React from "react";
import DropdownSelect from "./DropdownSelect";

export default function CreatePost() {
  return (
    <div className="bg-gray-100 pt-6 border-t">
      <div className="bg-white rounded flex">
        <div className="w-1/2 border-r p-6">
          <DropdownSelect
            label="Publish to"
            placeholder="Select a social account"
            selectItem={["LinkedIn", "Tiktok", "Instagram"]}
          />
        </div>
        <div className="w-1/2 p-6">right</div>
      </div>
    </div>
  );
}
