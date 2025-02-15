import React from "react";
import InputForm from "./inputForm";
import PostPreview from "./PostPreview";

const CreatePost = () => {
  return (
    <div className="bg-gray-100 py-6 border-t px-2 h-screen">
      <div className="bg-white rounded flex h-full">
        <div className="w-2/3 border-r p-6">
          <InputForm
            label="Publish to"
            selectPlaceholder="Select a social account"
            selectItem={["LinkedIn", "Tiktok", "Instagram"]}
            textAreaPlaceholder="Type your message here."
          />
        </div>
        <div className="w-1/3 p-6 pt-[53px]">
          <PostPreview platform="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
