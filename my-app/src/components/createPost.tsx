import React from "react";
import InputForm from "./inputForm";
import PostPreview from "./PostPreview";
import PostActionBar from "./PostActionBar";

const CreatePost = () => {
  return (
    <div className="bg-gray-100 py-6 border-t px-6 h-screen">
      <div className="bg-white rounded flex h-full">
        <div className="w-1/2 border-r p-6">
          <InputForm
            label="Publish to"
            selectPlaceholder="Select a social account"
            selectItem={["LinkedIn", "Facebook", "Instagram"]}
            textAreaPlaceholder="Type your message here."
          />
        </div>
        <div className="w-1/2 p-6 pt-[53px] gap-6 flex flex-col">
          <PostPreview />
          <PostActionBar />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
