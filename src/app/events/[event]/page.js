import { ImageCard } from "@/components/ImageCard";
import Link from "next/link";

const Page = () => {
  const images = [
    "/Images/event-img1.jpeg",
    "/Images/event-img2.jpeg",
    "/Images/event-img3.jpeg",
    "/Images/event-img4.jpeg",
    "/Images/event-img5.jpeg",
    "/Images/event-img6.jpeg",
    "/Images/event-img7.jpeg",
    "/Images/event-img8.jpeg"
  ];

  return (
    <main className="px-2 md:px-8 py-16 min-h-screen bg-[#0A0708]">

      {/* text div */}
      <div>
        <Link href="/"><p className="text-xl text-[#89BE63] mb-8 px-4 md:px-12"><span className="text-5xl">←</span></p></Link>
        {/* title of the event */}
        <h1 className="text-[#89BE63] font-bold text-2xl md:text-3xl px-4 md:px-12 mb-8">
          Launching Ceremony of The Pluriversity Lahore
        </h1>
        {/* description of the event */}
        <p className="font-normal text-base leading-6 text-white px-4 md:pl-12 md:pr-16 mt-6">
        The Pluriversity Lahore is a hybrid learning space led by scholars in critical, decolonial, and indigenous studies across International Relations, Peace Studies, Social Sciences, and Humanities. Rooted locally and connected globally, it reimagines peace, security, and future on our terms—a true &quot;Rethink Tank&quot; that centers long-suppressed subaltern voices.
        </p>
      </div>

      {/* images div */}
      <div className="px-4 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((imageSrc, index) => (
          <ImageCard key={index} imageSrc={imageSrc} />
        ))}
      </div>

    </main>
  );
};

export default Page;
