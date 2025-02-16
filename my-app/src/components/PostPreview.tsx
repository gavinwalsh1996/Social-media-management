import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ellipsis, ThumbsUp, MessageCircle, Share } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function PostPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className="text-blue-700"
        />
        <span className="text-xl font-bold">LinkedIn</span>
      </div>
      <div className="border p-3 rounded flex flex-col gap-6 shadow-md">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="font-bold">Gavin Walsh</span>
              <span className="text-gray-600 text-xs">Just now</span>
            </div>
          </div>
          <Ellipsis />
        </div>
        <div>This is a post</div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-gray-600">
            <ThumbsUp size={15} />
            <span className="text-sm">Like</span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <MessageCircle size={15} />
            <span className="text-sm">Comment</span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <Share size={15} />
            <span className="text-sm">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}
