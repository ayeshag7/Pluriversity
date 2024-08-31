
import Image from "next/image";
import Link from "next/link";

const page = ({params}) => {

  const stories = [
    {
      id: 1,
      title: "Welcoming New Senior Members to CPSS",
      description: "The Centre for Critical Peace Studies is delighted to announce the addition of several distinguished scholars to our Senior Core Committee, each bringing unique expertise and perspectives. Dr. Shabana Fayyaz, Chairperson and Associate Professor at Quaid-I-Azam University, adds depth with her research on social media and counter-violent extremism in Pakistan. Dr. Shahzeb Khan, Associate Professor at the University of the Punjab, enriches our discourse with his work on decolonizing literary studies and education. Dr. Ahmed Waqas Waheed, Executive Director at Roads Initiative, offers invaluable insights from his extensive background in international relations and political science. Dr. Dayyab Gillani, Director of Research at NACTA, contributes his expertise in terrorism and counterterrorism. Dr. Asghar Dashti&apos;s research on Pakistan-America military relations and his roles in human rights organizations highlight critical issues in international relations. Sohaib Ali, a doctoral candidate and Elsa-Neumann Scholar, provides a unique perspective on political theologies and regional dynamics. Muhammad Qasim, a lecturer at Aitchison College, offers valuable insights into decolonial theory and social movements, while Junaid Akhtar, a Content Architect and co-founder of ReCompute.pk, advances computing education with his expertise in software engineering and AI.",
      imageSrc: "story1.png"
    }
  ];

  const story = stories.find(s => s.id === parseInt(params.story, 10));

  if (!story) {
  return <p>Story not found</p>;
  }

  return (
    <main className="py-12 md:py-16 px-2 md:px-12 min-h-screen bg-[#0A0708]">

      <div className="flex flex-col px-4 md:px-20">

        <Link href="/stories"><p className="text-xl text-[#89BE63] mb-8"><span className="text-5xl">←</span></p></Link>
        
        <div className="flex flex-col md:flex-row gap-x-8">

          {/* image div */}
          <div className="h-80 max-md:mb-8 md:h-96 w-64 md:w-96 border border-[#89BE63] shadow-custom rounded-lg relative overflow-hidden">
            <Image
              src={`/Images/${story.imageSrc}`}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
            />
          </div>
          
          {/* text div */}
          <div className="flex flex-col gap-y-8">
            <p className="text-2xl md:text-3xl font-bold text-[#89BE63]">{story.title}</p>
            <p className="text-white text-lg w-64 md:w-[576px]">{story.description}</p>
          </div>

        </div>

      </div>

    </main>
  )
}

export default page;