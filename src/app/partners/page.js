"use client"

import { PartnerCard } from "@/components/PartnerCard";

const page = () => {

  const organizations = [
    {
      name: "Roads — Research on Advancement and Development of Social Sciences",
      picture: "pa-logo1.png",
      description: "Roads Initiative is an independent think-tank based in Islamabad. They aim to unite a diverse array of social sciences scholars and academic experts to help improve the academic culture by advancing the quality of Pakistan’s social sciences' academy.",
      url: "https://theroadsinitiative.org/#:~:text=At%20Roads%20Initiative%2C%20our%20mission,social%20sciences%20culture%20in%20Pakistan"
    },
    {
      name: "Indigenizing Knowledge Forum, University of the Punjab",
      picture: "pa-logo2.png",
      description: "The Indigenizing Knowledge Forum at the University of the Punjab is dedicated to fostering an academic environment that prioritizes local knowledge and indigenous perspectives. The forum encourages scholarly dialogue and research that reflects the cultural and intellectual traditions of Pakistan.",
      url: "https://web.facebook.com/story.php?story_fbid=2096965020400826&id=174224049341609&mibextid=oFDknk&rdid=WUYYwmhyJwl2JOcL"
    },
    {
      name: "Hast o Neest - Institute of Traditional Studies and Art",
      picture: "pa-logo3.png",
      description: "Hast o Neest is a private, non-partisan, and not-for-profit educational trust that provides an introduction to traditional thought, language, art, history, and culture in the context of Pakistan. Managed by volunteers, it aims to cultivate a culture of knowledge, emphasizing traditional art and philosophy.",
      url: "https://www.hastoneest.com/"
    },
    {
      name: "AlKhidmat Foundation Pakistan",
      picture: "pa-logo4.png",
      description: "AlKhidmat Foundation Pakistan is a non-profit organization committed to providing humanitarian services across the country. Their work spans various sectors, including education, health, disaster relief, and social welfare, with the goal of improving lives and empowering communities.",
      url: "https://alkhidmat.org/"
    },
    {
      name: "Bazm-E-AaLam",
      picture: "pa-logo5.png",
      description: "Bazm-E-AaLam is dedicated to fostering peaceful co-existence through interfaith and intercultural dialogues. The organization works to bridge cultural and religious divides, promoting understanding and harmony among diverse communities.",
      url: "https://web.facebook.com/bazmeawlam/?paipv=0&eav=AfZoAZUWSkkFL7JxaXliNuRR9ZhfyDUv4kGUXQMSJtxfXKrpDTEc71FKBEKGHCZabDk&_rdc=1&_rdr"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0708] pt-8 pb-24 px-4">
      <div className="py-8 px-4 md:px-8">
        <h1 className="font-bold text-[#89BE63] md:text-3xl text-2xl mb-4">Partners and Advisors</h1>
        <p className="text-white mb-16">Our esteemed partners and advisors consist of leading organizations and thought leaders committed to fostering academic excellence, social impact, and cultural enrichment. Together, we collaborate to drive meaningful change and promote the exchange of knowledge across diverse fields.</p>

        {/* partner cards come here */}
        <div className="flex flex-wrap md:gap-x-8 gap-y-12 justify-center mt-8">
          {organizations.map((organization, index) => (
            <PartnerCard
              key={index}
              name={organization.name}
              picture={organization.picture}
              description={organization.description}
              url={organization.url}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default page;
