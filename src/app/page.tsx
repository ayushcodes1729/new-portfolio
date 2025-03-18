import Image from "next/image";
import Time from "./components/time";
import Resume from "./components/resume";
import Name from "./components/name";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <Time />
        <Resume />
      </div>
      <Name/>
    </div>
  );
}
