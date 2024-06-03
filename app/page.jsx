import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
// import QuranSection from "@/components/home/QuranSection";
import QuranSection from "@/components/home/QuranSection";
import Maqalat from "@/components/home/Maqalat";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <QuranSection />
        <Maqalat />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
