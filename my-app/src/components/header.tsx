"use client";

import React from "react";
import { Button } from "./Button";
import { CirclePlus, X } from "lucide-react";
import Tabs_ from "./Tabs";
import { useDispatch } from "react-redux";
import { showCreatePost, hideCreatePost } from "@/state/slices/uiSlice";

interface HeaderProps {
  heading?: string;
  className?: string;
  showTabs?: boolean;
  buttonText: string;
}

export const Header = ({
  heading,
  className,
  showTabs,
  buttonText,
}: HeaderProps) => {
  const dispatch = useDispatch();
  return (
    <header className={`flex items-center justify-between h-10 ${className}`}>
      <h1 className="text-3xl font-extrabold">{heading}</h1>
      <Button
        text={buttonText}
        icon={buttonText === "X" ? X : CirclePlus}
        onClick={
          buttonText === "X"
            ? () => dispatch(hideCreatePost())
            : () => dispatch(showCreatePost())
        }
      />
      {showTabs && <Tabs_ />}
    </header>
  );
};
