import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
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
import { setPostContent, setPlatform } from "@/state/slices/postSlice";

interface InputFormProps {
  label: string;
  selectItem: string[];
  selectPlaceholder: string;
  textAreaPlaceholder: string;
}

const InputForm = ({
  label,
  selectItem,
  selectPlaceholder,
  textAreaPlaceholder,
}: InputFormProps) => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    dispatch(setPostContent(newText));
  };

  const handleEmojiSelect = (emojiData: { emoji: string }) => {
    const updatedText = text + emojiData.emoji;
    setText(updatedText);
    dispatch(setPostContent(updatedText));
    setShowPicker(false);
  };

  const handlePlatformChange = (selectedPlatform: string) => {
    if (
      selectedPlatform === "LinkedIn" ||
      selectedPlatform === "Instagram" ||
      selectedPlatform === "Facebook"
    ) {
      dispatch(setPlatform(selectedPlatform));
    } else {
      dispatch(setPlatform(null));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="shadow-md">
        <label htmlFor="select" className="text-sm text-gray-700 font-bold">
          {label}
        </label>
        <Select onValueChange={handlePlatformChange}>
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
          onChange={handleTextChange}
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
};

export default InputForm;
