import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ellipsis, ThumbsUp, MessageCircle, Share } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const platformIcons = {
  LinkedIn: { icon: faLinkedin, color: "text-blue-700" },
  Instagram: { icon: faInstagram, color: "text-pink-500" },
  Facebook: { icon: faFacebook, color: "text-blue-600" },
};

const PostPreview = () => {
  const postContent = useSelector((state: RootState) => state.post.content);
  const platform = useSelector((state: RootState) => state.post.platform);

  return (
    <div className="flex flex-col gap-6">
      {platform && (
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={platformIcons[platform as keyof typeof platformIcons].icon}
            size="2x"
            className={
              platformIcons[platform as keyof typeof platformIcons].color
            }
          />
          <span className="text-xl font-bold">{platform}</span>
        </div>
      )}

      <div className="border p-3 rounded flex flex-col gap-6 shadow-md bg-white">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>GW</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="font-bold">Gavin Walsh</span>
              <span className="text-gray-600 text-xs">Just now</span>
            </div>
          </div>
          <Ellipsis />
        </div>

        <div className="text-gray-800 h-64 overflow-y-auto">
          {postContent || "Your post preview will appear here..."}
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
            <ThumbsUp size={15} />
            <span className="text-sm">Like</span>
          </div>

          <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
            <MessageCircle size={15} />
            <span className="text-sm">Comment</span>
          </div>

          <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
            <Share size={15} />
            <span className="text-sm">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
