import React from "react";
import { Linkedin } from "lucide-react";

export default function PostPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <span>test</span>
        <LinkedIn />
      </div>
      <div>
        <div>Gavin Walsh</div>
        <div>Like Comment Share</div>
      </div>
    </div>
  );
}
