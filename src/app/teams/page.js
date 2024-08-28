"use client"

import Image from "next/image";
import Link from "next/link";
import { ProfileCard } from "@/components/ProfileCard";

const page = () => {

  const seniorMembers = [
    {
      id: "senior-1",
      name: "Dr Fatima Sajjad (Founder)",
      profilePicture: "senior-mem1.png",
      description: "Fatima Waqi Sajjad is the founding Director of the Centre for Critical Peace Studies and Associate Professor at the University of Management and Technology Lahore. Her work questions epistemic violence and injustice in Peace Studies and beyond. She is the author of ‘A subaltern gaze on White ignorance, (in) security and the possibility of educating the White rescue plans’ (2023). Security Dialogue; ‘On the delusion of disobedience amid coloniality: location Pakistan’ (2023). Third World Quarterly; ‘Rethinking education to counter violent extremism: a critical review of policy and practice’ (2022). Ethics and Education, 17(1). She is the editor of ‘Peace as Liberation: Visions and Praxis from Below’, a book that centres the voices of the Global South."
    },
    {
      id: "senior-2",
      name: "Sohaib Ali",
      profilePicture: "senior-mem2.jpg",
      description: "Sohaib Ali is a doctoral candidate in International Relations and an Elsa-Neumann Scholar at Freie Universität, Berlin. He has an MSc in Social Science Research Methods (substantive focus: Globalization and Counter-Radicalization) from Middlesex University, London, and an MA in International Relations from the University of Punjab, Lahore. He is an Affiliated Researcher at the Leibniz Center for Modern Oriental Studies, Berlin (ZMO) and a faculty member (on leave) at the Department of Political Science and International Relations, University of Management and Technology, Lahore. His doctoral research is focused on the contending political theologies of Pakistan's transnational Islamic actors, and he has published book chapters on 'Pacifying Sunni–Shi’ite Relations in Pakistan' (Routledge, 2020) and 'Iqbalian Liberation Theology' (Springer, 2023)."
    },
    {
      id: "senior-3",
      name: "Dr. Dayyab Gillani",
      profilePicture: "senior-mem3.png",
      description: "Dr. Dayyab Gillani is a distinguished expert in international relations and security studies, currently serving as the Director of Research at Pakistan's National Counter Terrorism Authority (NACTA). With a PhD from the University of St. Andrews and a career spanning academia and policymaking, Dr. Gillani has made significant contributions to the field. He is an Assistant Professor at the University of the Punjab and a prolific researcher with a focus on terrorism, counterterrorism, and regional security. His work spans academic publications, policy briefs, and advisory roles. For inquiries or collaborations, Dr. Gillani can be reached at dayyabgillani.polsc@pu.edu.pk."
    },
    {
      id: "senior-4",
      name: "Dr Shabana Fayyaz",
      profilePicture: "senior-mem4.jpg",
      description: "Chairperson and Associate Professor at the Defense & Strategic Studies Department, Quaid-I-Azam University, Islamabad. Holds PhD from University of Birmingham, UK. Authored book: Pakistan's Response to Terrorism: A Case Study of Musharraf era, 2020. Currently pursuing research on: Social Media and CVEPakistan’s Case, in collaboration with the Swansea University’s Cyber Threats Research Centre, UK. Participated in numerous seminars and conferences at national and international levels on themes of nontraditional security, violent extremism, counterterrorism, de-radicalization, Pakistan’s foreign policy, and South Asian politics."
    },
    {
      id: "senior-5",
      name: "Dr. Shahzeb Khan",
      profilePicture: "senior-mem5.jpg",
      description: "Dr. Shahzeb Khan is an Associate Professor at the Institute of English Studies, University of the Punjab, Lahore. He has made significant contributions to the discourse on decolonization of literary studies and education in the country. Dr. Khan founded the Indigenizing Knowledge Forum, a faculty discussion forum at Punjab University, in July 2016, which has been instrumental in fostering thoughtful debates within the academic community. His extensive public scholarly engagements include his seminal articles highlighting the need for decolonisation in Pakistan."
    },
    {
      id: "senior-6",
      name: "Dr. Ahmed Waqas Waheed",
      profilePicture: "senior-mem6.jpg",
      description: "Dr Ahmed Waqas Waheed is Executive Director at Roads Initiative. He has a Masters in International Relations from the University of Sussex, UK and a PhD in Political Science from Queen Mary University of London, UK. He has published widely including two books: The Wrong Ally: Pakistan’s State Sovereignty under US Dependence and Constructing Pakistan through Knowledge Production in International Relations and Area Studies. He has delivered lectures and seminars at national and international forums."
    },
    {
      id: "senior-7",
      name: "Dr Asghar Dashti",
      profilePicture: "senior-mem7.jpg",
      description: "Dr. Asghar Ali Dashti has been serving the Department of International Relations, Federal Urdu University, Karachi since 2008. He holds a PhD degree on the topic of ‘Pakistan America Military Relations’. He is a research supervisor at Area Study Center for Middle East and Arab Countries, University of Baluchistan, Quetta, and is also the assistant editor of Research journal Wifaqiyan. He is a member of Human Rights Commission of Pakistan (HRCP) and part of Indigenous Rights Alliance (Sindh)."
    }
  ];

  const centralCoreCommittee = [
    {
      id:"cc-1",
      name: "Wajeeh Ul Hassan",
      profilePicture: "cc-mem1.jpg",
      description: "Syed Wajeeh Ul Hassan is a PhD scholar in International Relations at the University of Management and Technology, Lahore. With nearly four decades of experience in maritime security, he is now working with The Citizen Foundation, a non-profit organization focused on driving positive social change through education. As a subject matter expert in the maritime domain, he has vast experience, ranging from helicopter piloting to managing naval aviation operations. He has held various roles in operational planning, administration, training, and personnel management in the Navy, including leadership positions. Additionally, he has played a key role in supervising and delivering professional military education. Commodore Syed Wajeeh Ul Hassan holds a diverse educational background, including a Master's in Defence Studies from King's College London, a Master's in Politics and Policy from Deakin University, Australia, and an MPhil in Public Policy and Strategic Security Management from the National Defence University, Islamabad. He is also an alumnus of The Near East South Asia (NESA) Centre for Strategic Studies in Washington, D.C. In recognition of his distinguished service, he was awarded the Sitara-e-Imtiaz (Military) in 2016 and the Sitara-e-Basalat in 2012 by the President of Pakistan. His extensive operational and administrative experience provides him with a unique insight into global politics and its implications for Pakistan. His current research focuses on the Decolonial turn in International Relations, exploring perceptions, perspectives, and possibilities. His work has been published in the Journal of Contemporary Studies (NDU) and by Springer."
    },
    {
      id:"cc-2",
      name: "Muhammad Qasim",
      profilePicture: "cc-mem2.jpg",
      description: "Muhammad Qasim is a lecturer of World History at Aitchison College. He previously taught at various universities in Lahore within the Department of Social Science. His research areas include decolonial and critical theory, social movements, and the colonial and postcolonial politics of Punjab."
    },
    {
      id:"cc-3",
      name: "Maira Asif",
      profilePicture: "cc-mem3.jpg",
      description: "Maira Asif is a gender researcher and development professional with a Fulbright MA in Women's, Gender and sexuality studies from Rutgers University, USA. She is currently working with a research consultancy DevTrio and is also the Asia Regional Coordinator for Women's Living Under Muslim Laws. She can be reached at mairaasifher@gmail.com."
    },
    {
      id:"cc-4",
      name: "Sundus Basharat",
      profilePicture: "cc-mem4.jpg",
      description: "Sundus Basharat is a PhD Research Scholar in International Relations at UMT, Lahore, focusing on the role of media in peace and conflict between India and Pakistan. She holds an MPhil with distinction from National Defence University Islamabad and a Master’s in Defence and Strategic Studies from Quaid-e-Azam University. With experience as an Information Analyst and work in think tanks and various educational institutions, she has also completed courses in Peace and Conflict Studies from Tokyo University and Democratic Development from Stanford. Currently based in Karachi, she serves as a Lecturer and Program Manager in International Relations at DHA Suffa University."
    },
    {
      id:"cc-5",
      name: "Kamran Fiaz",
      profilePicture: "cc-mem5.jpg",
      description: "Muhammad Kamran Fiaz is a PhD Scholar of Political Science with Mphil in South Asian Studies. Currently, he is a visiting lecturer at Bahauddin Zakariya University, Multan, Pakistan. He is interested in interdisciplinary approaches and exploring different social perspectives of decolonisation, modernity, democracy, resistance, harmony, justice and the 'selfhood of societies' (borrowing from Ashis Nandy)."
    },
    {
      id:"cc-6",
      name: "Farrukh Awan",
      profilePicture: "cc-mem6.jpg",
      description: "Farrukh Ahmad Awan is a Ph.D. scholar at the Department of Political Science and International Relations, University of Management and Technology, Lahore. He is presently working on his doctoral thesis entitled, 'Pakistan-Africa Relations in the Post-Cold War Era: Opportunities and Challenges (1990-2020)' under the supervision of Dr. Muhammad Shoaib Pervez, Associate Professor, Department of Political Science and International Relations, University of Management and Technology, Lahore. After Graduation from Government College University Lahore (GCU), he has done his M.Sc. in Defence and Strategic Studies and M.Phil. in Defence and Strategic Studies in 1995 and 2003 from Quaid¬-i-¬Azam University Islamabad. He also gained MS in Project Management in the year 2020 from UMT. His research areas include; Theoretical Debates of International Relations, National/ International Security, Foreign Policy Analysis, Digital Diplomacy and Peace and Conflict Studies."
    },
    {
      id:"cc-7",
      name: "Naima Zia",
      profilePicture: "missing-profile.png",
      description: "Naima Zia's academic journey, rooted in Law, International Relations, Political Sciences, and Sociology, has shaped her into a research and development consultant with a deep understanding of the intersections between religion, society, and politics. As an expert in Neuro-Linguistic Programming (NLP), she has devoted herself to training others in interpersonal and personal coaching, with a particular emphasis on skill enhancement and unlocking potential. Driven by a commitment to integrate diverse fields of study, Naima's work focuses on devising strategies that ensure the practical application of knowledge. Her approach is grounded in the belief that true understanding should lead to meaningful action, making theory relevant and impactful in real-world scenarios."
    }
  ];
  
  const coordinatingCoreCommittee = [
    {
      id: "coc-1",
      name: "Seher Raza",
      profilePicture: "coc-mem1.jpg",
      description: "Seher Raza is currently studying International Relations at UMT who brings her organizational skills and passion for peace studies to her role as the office secretary at CPSS. Her position is pivotal in ensuring that the daily operations run smoothly, from managing schedules to coordinating communication across the team. Seher's commitment to research on decoloniality is evident in her proactive approach to supporting academic projects and fostering a collaborative environment within CPSS. Her work not only aids in the administrative functioning of the organization but also contributes to the broader goals of promoting critical peace studies and nurturing scholarly development among her peers."
    },
    {
      id: "coc-2",
      name: "Bashar Nawab",
      profilePicture: "coc-mem2.jpg",
      description: "Bashar Ul Islam Nawab is a 23-year-old International Relations student at UMT. He is working as a coordinator at CPSS and as a coordinator, Bashar plays a vital role in facilitating communication and coordination among the NGO's members. His dedication to advancing research on decoloniality reflects his commitment to promoting critical peace studies and fostering academic growth within the organization."
    },
    {
      id: "coc-3",
      name: "Huzaifa Khalif",
      profilePicture: "coc-mem3.jpg",
      description: "Huzaifa Khalid is a passionate advocate for decoloniality and a dedicated member of the Critical Peace Studies Society. As a Coordinator, he plays a key role in ensuring smooth collaboration among the NGO's members. Huzaifa is currently pursuing a Bachelor's degree in International Relations at UMT, where he applies his academic knowledge to his work within the organization. Since joining, Huzaifa has been instrumental in driving the society's mission of advancing research in critical peace studies."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0708] pt-8 pb-24 px-4">
      <div className="py-8 my-8 px-8 md:px-20">
        <p className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-4">Senior Core Committee</p>
        <p className="text-white">The Senior Core Committee comprises seasoned professionals and thought leaders who provide strategic direction and oversight to the organization. Their extensive experience and deep knowledge in their respective fields drive the core initiatives, ensuring alignment with our mission and values.</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
        {seniorMembers.map((member) => (
          <Link
            key={member.id}
            href={`/teams/${member.id}`}  // Link to the dynamic page with the member's ID
            passHref
          >
            <ProfileCard
              name={member.name}
              profilePicture={member.profilePicture}
            />
          </Link>
        ))}
      </div>

      <div className="py-8 my-8 px-8 md:px-20">
        <p className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-4">Central Core Committee</p>
        <p className="text-white">The Central Core Committee plays a crucial role in bridging the gap between strategy and execution. This diverse group of experts is responsible for implementing the organization’s vision, fostering collaboration, and guiding various projects to successful outcomes.</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
        {centralCoreCommittee.map((member) => (
          <Link
            key={member.id}
            href={`/teams/${member.id}`}  
            passHref
          >
            <ProfileCard
              name={member.name}
              profilePicture={member.profilePicture}
            />
          </Link>
        ))}
      </div>

      <div className="pt-8 pb-4 mt-16 mb-4 md:mb-8 px-8 md:px-20">
        <p className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-4">Senior Officer</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-x-16 mb-16'>
          <div className="h-80 md:h-96 w-72 md:w-96 border border-[#89BE63] shadow-custom rounded-lg relative overflow-hidden max-md:mb-8">
            <Image
                  src={`/Images/senior-member.JPG`}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0"
            />
          </div>
          <div className='flex flex-col gap-y-4'>
            <h1 className='text-2xl md:text-3xl font-bold text-[#89BE63]'>Ms. Tehreem Saeed</h1>
            <p className='text-lg text-white w-72 md:w-[576px]'>Ms. Tehreem Saeed is senior officer at the Center of Critical and Peace Studies within the Department of Political Science and International Relations at the University of Management and Technology (U.M.T) in Lahore. With a dedicated focus on research and a strong academic background, she has made significant contributions to the field.</p>
          </div>
        </div>
      
      <div className="py-8 my-8 px-8 md:px-20">
        <p className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-4">Coordinating Committee</p>
        <p className="text-white">The Coordinating Committee is the backbone of our operational efforts. This dedicated team ensures seamless communication and coordination across all levels, enabling the smooth functioning of our programs and initiatives. Their work is vital in maintaining the organization’s day-to-day operations.</p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
        {coordinatingCoreCommittee.map((member) => (
          <Link
            key={member.id}
            href={`/teams/${member.id}`}
            passHref
          >
            <ProfileCard
              name={member.name}
              profilePicture={member.profilePicture}
            />
          </Link>
        ))}
      </div>

    </main>
  )
}

export default page;
