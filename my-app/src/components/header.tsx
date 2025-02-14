import React from "react";
import { Button } from "./button";
import { CirclePlus } from "lucide-react";

interface HeaderProps {
  heading: string;
}

export const Header = ({heading}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-6">
      <h1 className="text-3xl">{heading}</h1>
      <Button text="Create a post" icon={CirclePlus} />
    </header>
  );
};
