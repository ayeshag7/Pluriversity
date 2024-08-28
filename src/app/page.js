import { Hero } from "@/components/Hero";
import { TopStories } from "@/components/TopStories";
import { ReadingAndArts } from "@/components/ReadingAndArts";
import { GenZCorner } from "@/components/GenZCorner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <TopStories/>
      <ReadingAndArts/>
      <GenZCorner/>
    </main>
  );
}
