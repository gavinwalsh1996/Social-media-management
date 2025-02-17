"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", followers: 1200, impressions: 3500, engagementRate: 15 },
  { month: "February", followers: 1500, impressions: 4000, engagementRate: 18 },
  { month: "March", followers: 1800, impressions: 5000, engagementRate: 20 },
  { month: "April", followers: 2100, impressions: 6000, engagementRate: 25 },
  { month: "May", followers: 2500, impressions: 7000, engagementRate: 22 },
  { month: "June", followers: 2800, impressions: 7500, engagementRate: 28 },
];

const chartConfig = {
  followers: {
    label: "Followers",
    color: "#34D399",
  },
  impressions: {
    label: "Impressions",
    color: "#60A5FA",
  },
  engagementRate: {
    label: "Engagement Rate (%)",
    color: "#F59E0B",
  },
};

export function DataChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar
          dataKey="followers"
          fill={chartConfig.followers.color}
          radius={4}
        />

        <Bar
          dataKey="impressions"
          fill={chartConfig.impressions.color}
          radius={4}
        />

        <Bar
          dataKey="engagementRate"
          fill={chartConfig.engagementRate.color}
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}
