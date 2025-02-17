"use client";

import { Header } from "@/components/Header";
import StatCard from "@/components/StatCard";
import DataTable from "@/components/DataTable";
import { DataChart } from "@/components/DataChart";
import ProgressBar from "@/components/ProgressBar";
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
        heading={showCreatePost ? "Create a post" : "Welcome, Gavin!"}
        buttonText={showCreatePost ? "X" : "Create a post"}
      />
      <main className="mt-6">
        {showCreatePost ? (
          <CreatePost />
        ) : (
          <div className="bg-gray-100 py-6 border-t px-6 h-screen">
            <div className="bg-white rounded flex h-full p-6 flex-col gap-6">
              <div className="text-xl font-bold mb-6">Your Dashboard</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="col-span-1 p-4 flex flex-col justify-between">
                  <ProgressBar
                    label="Followers Goal"
                    current={1500}
                    total={2000}
                  />
                  <DataTable />
                </div>
                <div className="col-span-1 p-4">
                  <div className="bg-gray-200 p-6 rounded-lg">
                    <DataChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
