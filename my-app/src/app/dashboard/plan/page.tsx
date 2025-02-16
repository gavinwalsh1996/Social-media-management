import Image from "next/image";
import { Header } from "@/components/Header";
import Calendar from "@/components/Calendar";

export default function Plan() {
  return (
    <div className="p-6 flex flex-col gap-6">
      {/* <Header className="border-b pb-2" /> */}
      <Calendar />
    </div>
  );
}
