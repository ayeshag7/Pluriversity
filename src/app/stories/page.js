import { StoryCard } from "@/components/StoryCard";

const page = () => {

  const stories = [
    {
      id: 1,
      title: "Welcoming New Senior Members to CPSS",
      description: "The Centre for Critical Peace Studies is delighted to announce the addition of several distinguished scholars to our Senior Core Committee, each bringing unique expertise and perspectives. Dr. Shabana Fayyaz, Chairperson and Associate Professor at Quaid-I-Azam University, adds depth with her research on social media and counter-violent extremism in Pakistan. Dr. Shahzeb Khan, Associate Professor at the University of the Punjab, enriches our discourse with his work on decolonizing literary studies and education. Dr. Ahmed Waqas Waheed, Executive Director at Roads Initiative, offers invaluable insights from his extensive background in international relations and political science. Dr. Dayyab Gillani, Director of Research at NACTA, contributes his expertise in terrorism and counterterrorism. Dr. Asghar Dashti&apos;s research on Pakistan-America military relations and his roles in human rights organizations highlight critical issues in international relations. Sohaib Ali, a doctoral candidate and Elsa-Neumann Scholar, provides a unique perspective on political theologies and regional dynamics. Muhammad Qasim, a lecturer at Aitchison College, offers valuable insights into decolonial theory and social movements, while Junaid Akhtar, a Content Architect and co-founder of ReCompute.pk, advances computing education with his expertise in software engineering and AI.",
      imageSrc: "story1.png"
    }
  ];

  return (
    <main className="px-2 md:px-8 py-16 min-h-screen bg-[#0A0708]">

      <p className="text-[#89BE63] font-bold text-2xl md:text-3xl px-4 md:px-16 mb-16">Explore All Stories:</p>

      {/* stories div */}
      <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 px-4 md:px-16 mt-4 mb-12">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            id={story.id}
            title={story.title}
            description={story.description}
            imageSrc={`/Images/${story.imageSrc}`}
          />
        ))}
      </div>

    </main>
  )
}

export default page;