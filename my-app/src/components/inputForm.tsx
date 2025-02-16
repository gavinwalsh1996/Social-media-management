import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { Textarea } from "@/components/ui/textarea";

interface DropdownSelect {
  label: string;
  selectItem: string[];
  selectPlaceholder: string;
  textAreaPlaceholder: string;
}

export default function InputForm({
  label,
  selectItem,
  selectPlaceholder,
  textAreaPlaceholder,
}: DropdownSelect) {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiSelect = (emojiData: any) => {
    setText((prev) => prev + emojiData.emoji);
    setShowPicker(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="shadow-md">
        <label htmlFor="select" className="text-sm text-gray-700 font-bold">
          {label}
        </label>
        <Select>
          <SelectTrigger id="select" className="w-full">
            <SelectValue placeholder={selectPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {selectItem.map((item, index) => (
              <SelectItem value={item} key={index}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="relative">
        <Textarea
          placeholder={textAreaPlaceholder}
          maxLength={3000}
          className="h-32 shadow-md"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="absolute bottom-2 left-4 text-sm text-gray-500">
          {text.length} / 3,000
        </div>

        <button
          className="absolute bottom-1 right-4 p-2 text-xl"
          onClick={() => setShowPicker(!showPicker)}
        >
          <Smile size={18} />
        </button>

        {showPicker && (
          <div className="absolute bottom-100 right-4 z-50">
            <EmojiPicker onEmojiClick={handleEmojiSelect} />
          </div>
        )}
      </div>
    </div>
  );
}
