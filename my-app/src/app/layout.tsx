"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { House, CalendarDays, CirclePlus, User, Store } from "lucide-react";
import { Provider } from "react-redux";
import { store } from "@/state/store";

const menuItems = [
  { label: "Home", icon: House, tooltipText: "Home", dashboardId: "/home" },
  {
    label: "Plan",
    icon: CalendarDays,
    tooltipText: "Plan",
    dashboardId: "/plan",
  },
  {
    label: "Create",
    icon: CirclePlus,
    tooltipText: "Create",
    dashboardId: "/create",
  },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <div className="flex min-h-screen">
            <Sidebar menuItems={menuItems} />
            <main className="flex-1">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
