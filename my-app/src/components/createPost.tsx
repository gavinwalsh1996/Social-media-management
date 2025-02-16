import React from "react";
import DropdownSelect from "./InputForm";
import PostPreview from "./PostPreview";

export default function CreatePost() {
  return (
    <div className="bg-gray-100 pt-6 border-t">
      <div className="bg-white rounded flex">
        <div className="w-1/2 border-r p-6">
          <DropdownSelect
            label="Publish to"
            selectPlaceholder="Select a social account"
            selectItem={["LinkedIn", "Tiktok", "Instagram"]}
            textAreaPlaceholder="Type your message here."
          />
        </div>
        <div className="w-1/2 p-6">
          <PostPreview />
        </div>
      </div>
    </div>
  );
}
