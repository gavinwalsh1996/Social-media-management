"use client";

import React from "react";
import { Button } from "./button";
import { CirclePlus } from "lucide-react";
import Tabs_ from "./tabs";
import { useDispatch } from "react-redux";
import { showCreatePost } from "@/state/slices/uiSlice";

interface HeaderProps {
  heading?: string;
  className?: string;
  showTabs?: boolean;
}

export const Header = ({ heading, className, showTabs }: HeaderProps) => {
  const dispatch = useDispatch();
  return (
    <header className={`flex items-center justify-between ${className}`}>
      <h1 className="text-3xl">{heading}</h1>
      <Button
        text="Create a post"
        icon={CirclePlus}
        onClick={() => dispatch(showCreatePost())}
      />
      {showTabs && <Tabs_ />}
    </header>
  );
};
