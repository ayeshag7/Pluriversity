import { ImageCard } from "@/components/ImageCard";

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
        {/* title of the event */}
        <h1 className="text-[#89BE63] font-bold text-2xl md:text-3xl px-4 md:px-12 mb-8">
          Launching Ceremony of The Pluriversity Lahore
        </h1>
        {/* description of the event */}
        <p className="font-normal text-base leading-6 text-white px-4 md:px-12 mt-6">
          The Pluriversity Lahore! a hybrid learning space led by the leading scholars of critical, decolonial, anti-colonial, indigenous & subaltern studies of #InternationalRelations, #PeaceStudies #SocialSciences and #Humanities in Pakistan and beyond #ThePluriversityLahore is a locally rooted , globally connected learning & unlearning space where we dare to imagine peace, security and future on our own terms. In contemporary academic jargon, we are a #RethinkTank of Peace Studies and International Relations, centering the subaltern voices that have been suppressed for too long.
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
