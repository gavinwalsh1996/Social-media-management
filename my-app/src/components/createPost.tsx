import React from "react";
import DropdownSelect from "./InputForm";
import PostPreview from "./PostPreview";

export default function CreatePost() {
  return (
    <div className="bg-gray-100 py-6 border-t px-2">
      <div className="bg-white rounded flex h-full">
        <div className="w-1/2 border-r p-6">
          <DropdownSelect
            label="Publish to"
            selectPlaceholder="Select a social account"
            selectItem={["LinkedIn", "Tiktok", "Instagram"]}
            textAreaPlaceholder="Type your message here."
          />
        </div>
        <div className="w-1/2 p-6 pt-[53px]">
          <PostPreview />
        </div>
      </div>
    </div>
  );
}
