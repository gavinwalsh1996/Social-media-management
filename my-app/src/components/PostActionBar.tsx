import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { schedulePost } from "@/state/slices/postSlice";
import { RootState } from "@/state/store";
import { Button } from "./Button";

export default function PostActionBar() {
  const dispatch = useDispatch();
  const postContent = useSelector((state: RootState) => state.post.content);
  const platform = useSelector((state: RootState) => state.post.platform);
  const [scheduledTime, setScheduledTime] = useState("");

  const handleSchedule = () => {
    if (!postContent || !platform || !scheduledTime) {
      alert("Please enter content, select a platform, and choose a time.");
      return;
    }

    dispatch(schedulePost({ content: postContent, platform, scheduledTime }));
    alert("Post scheduled!");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex justify-end gap-4">
      <input
        type="datetime-local"
        value={scheduledTime}
        onChange={(e) => setScheduledTime(e.target.value)}
        className="border p-2 rounded"
      />
      <Button text="Schedule Post" onClick={handleSchedule} />
    </div>
  );
}
