import Image from "next/image";
import { Header } from "@/components/header";
import Calendar from "@/components/calendar";

export default function Plan() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <Header className="border-b pb-2" />
      <Calendar />
    </div>
  );
}
