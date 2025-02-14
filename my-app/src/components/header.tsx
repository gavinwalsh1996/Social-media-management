import React from "react";
import { Button } from "./button";
import { CirclePlus } from "lucide-react";

interface HeaderProps {
  heading?: string;
  className?: string;
}

export const Header = ({ heading, className }: HeaderProps) => {
  return (
    <header className={`flex items-center justify-between ${className}`}>
      <h1 className="text-3xl">{heading}</h1>
      <Button text="Create a post" icon={CirclePlus} />
    </header>
  );
};
