"use client";

import { Header } from "@/components/header";
import CreatePost from "@/components/createPost";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function Home() {
  const showCreatePost = useSelector(
    (state: RootState) => state.ui.showCreatePost
  );
  return (
    <div className="p-6">
      <Header heading={showCreatePost ? "Create a post" : "Welcome User!"} />
      <main className="mt-6">
        {showCreatePost ? (
          <CreatePost />
        ) : (
          <h2 className="text-2xl font-semibold">Home Page</h2>
        )}
      </main>
    </div>
  );
}
