"use client";

import { Header } from "@/components/Header";
import StatCard from "@/components/StatCard";
import CreatePost from "@/components/CreatePost";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { Megaphone, Users, MessageSquare, Clock } from "lucide-react";

export default function Home() {
  const showCreatePost = useSelector(
    (state: RootState) => state.ui.showCreatePost
  );
  return (
    <div className="p-6">
      <Header
        heading={showCreatePost ? "Create a post" : "Welcome Gavin!"}
        buttonText={showCreatePost ? "X" : "Create a post"}
      />
      <main className="mt-6">
        {showCreatePost ? (
          <CreatePost />
        ) : (
          <div className="bg-gray-100 py-6 border-t px-6 h-screen">
            <div className="bg-white rounded flex h-full p-6 flex-col gap-6">
              <div className="text-xl font-bold">Your Dashboard</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-1 p-4">
                  <StatCard
                    icon={Megaphone}
                    title="Spent on Ads"
                    amount={9800}
                    percentage={1.6}
                  />
                </div>
                <div className="col-span-1 p-4">
                  <StatCard
                    icon={Users}
                    title="New Followers"
                    amount={2300}
                    percentage={3.2}
                  />
                </div>
                <div className="col-span-1 p-4">
                  <StatCard
                    icon={MessageSquare}
                    title="Engagement Rate"
                    amount={4.5}
                    percentage={-0.8}
                  />
                </div>
                <div className="col-span-1 p-4">
                  <StatCard
                    icon={Clock}
                    title="Scheduled Posts"
                    amount={15}
                    percentage={5.4}
                  />
                </div>
                <div className="col-span-2 md:col-span-2 p-4">test</div>
                <div className="col-span-2 md:col-span-2 p-4">test</div>
                <div className="col-span-2 md:col-span-2 p-4">test</div>
                <div className="col-span-2 md:col-span-2 p-4">test</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
