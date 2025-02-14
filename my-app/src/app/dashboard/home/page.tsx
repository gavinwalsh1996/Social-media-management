import Image from "next/image";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="p-6">
      <Header heading="Welcome User!" />
    </div>
  );
}
