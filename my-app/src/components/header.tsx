import React from "react";

interface HeaderProps {
  heading: string;
}

export const Header = ({ heading }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <h1>Welcome Message</h1>
      <button>Create a post</button>
    </header>
  );
};
