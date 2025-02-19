import React from "react";
import { Button } from "./Button";

const postNow = () => {
  console.log("post created!");
};

export default function PostActionBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex justify-end gap-4">
      <Button
        text="Save as draft"
        className="bg-white border text-black hover:bg-[#F3F4F6]"
      />
      <Button
        text="Schedule for later"
        className="bg-[#F3F4F6] text-black hover:bg-white rounded-full"
      />
      <Button text="Post now" onClick={postNow} />
    </div>
  );
}
