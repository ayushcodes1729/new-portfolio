import Image from "next/image";
import Time from "./components/time";

export default function Home() {
  return (
    <div className="p-7">
      <Time />
      <h1 className="bg-red-500">Ayush Kumar</h1>
    </div>
  );
}
