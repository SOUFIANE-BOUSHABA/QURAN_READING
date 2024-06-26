
import Hero from "@/components/home/Hero";
import QuranSection from "@/components/home/QuranSection";
import Maqalat from "@/components/home/Maqalat";
import Galery from "@/components/home/Galery";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <QuranSection />
        <Maqalat />
        <Galery />
      </div>
    </main>
  );
}
