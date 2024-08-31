import React from 'react';
import Image from 'next/image';

export default function page ({params}) {

  const seniorMembers = [
    {
      id: "senior-1",
      name: "Dr Fatima Sajjad (Founder)",
      profilePicture: "senior-mem1.png",
      description: "Fatima Waqi Sajjad is the founding Director of the Centre for Critical Peace Studies and Associate Professor at the University of Management and Technology Lahore. Her work questions epistemic violence and injustice in Peace Studies and beyond. She is the author of ‘A subaltern gaze on White ignorance, (in) security and the possibility of educating the White rescue plans’ (2023). Security Dialogue; ‘On the delusion of disobedience amid coloniality: location Pakistan’ (2023). Third World Quarterly; ‘Rethinking education to counter violent extremism: a critical review of policy and practice’ (2022). Ethics and Education, 17(1). She is the editor of ‘Peace as Liberation: Visions and Praxis from Below’, a book that centres the voices of the Global South in Peace Psychology."
    },
    {
      id: "senior-2",
      name: "Dr Shabana Fayyaz",
      profilePicture: "senior-mem4.jpg",
      description: "Chairperson and Associate Professor at the Defense & Strategic Studies Department, Quaid-I-Azam University, Islamabad. Holds PhD from University of Birmingham, UK. Authored book: Pakistan's Response to Terrorism: A Case Study of Musharraf era, 2020. Currently pursuing research on: Social Media and CVEPakistan’s Case, in collaboration with the Swansea University’s Cyber Threats Research Centre, UK. Participated in numerous seminars and conferences at national and international levels on themes of nontraditional security, violent extremism, counterterrorism, de-radicalization, Pakistan’s foreign policy, and South Asian politics."
    },
    {
      id: "senior-3",
      name: "Dr. Shahzeb Khan",
      profilePicture: "senior-mem5.jpg",
      description: "Dr. Shahzeb Khan is an Associate Professor at the Institute of English Studies, University of the Punjab, Lahore. He has made significant contributions to the discourse on decolonization of literary studies and education in the country. Dr. Khan founded the Indigenizing Knowledge Forum, a faculty discussion forum at Punjab University, in July 2016, which has been instrumental in fostering thoughtful debates within the academic community. His extensive public scholarly engagements include his seminal articles highlighting the need for decolonisation in Pakistan."
    },
    {
      id: "senior-4",
      name: "Dr. Ahmed Waqas Waheed",
      profilePicture: "senior-mem6.jpg",
      description: "Dr Ahmed Waqas Waheed is Executive Director at Roads Initiative. He has a Masters in International Relations from the University of Sussex, UK and a PhD in Political Science from Queen Mary University of London, UK. He has published widely including two books: The Wrong Ally: Pakistan’s State Sovereignty under US Dependence and Constructing Pakistan through Knowledge Production in International Relations and Area Studies. He has delivered lectures and seminars at national and international forums."
    },
    {
      id: "senior-5",
      name: "Dr. Dayyab Gillani",
      profilePicture: "senior-mem3.png",
      description: "Dr. Dayyab Gillani is a distinguished expert in international relations and security studies, currently serving as the Director of Research at Pakistan's National Counter Terrorism Authority (NACTA). With a PhD from the University of St. Andrews and a career spanning academia and policymaking, Dr. Gillani has made significant contributions to the field. He is an Assistant Professor at the University of the Punjab and a prolific researcher with a focus on terrorism, counterterrorism, and regional security. His work spans academic publications, policy briefs, and advisory roles. For inquiries or collaborations, Dr. Gillani can be reached at dayyabgillani.polsc@pu.edu.pk."
    },
    {
      id: "senior-6",
      name: "Sohaib Ali",
      profilePicture: "senior-mem2.jpg",
      description: "Sohaib Ali is a doctoral candidate in International Relations and an Elsa-Neumann Scholar at Freie Universität, Berlin. He has an MSc in Social Science Research Methods (substantive focus: Globalization and Counter-Radicalization) from Middlesex University, London, and an MA in International Relations from the University of Punjab, Lahore. He is an Affiliated Researcher at the Leibniz Center for Modern Oriental Studies, Berlin (ZMO) and a faculty member (on leave) at the Department of Political Science and International Relations, University of Management and Technology, Lahore. His doctoral research is focused on the contending political theologies of Pakistan's transnational Islamic actors, and he has published book chapters on 'Pacifying Sunni–Shi’ite Relations in Pakistan' (Routledge, 2020) and 'Iqbalian Liberation Theology' (Springer, 2023)."
    },
    {
      id:"senior-7",
      name: "Junaid Akhtar",
      profilePicture: "senior-mem9.jpg",
      description: "Junaid Akhtar is an accomplished academic and researcher dedicated to advancing computer science education in Pakistan. Currently a Content Architect at Educative, Inc. and co-founder of ReCompute.pk, he focuses on enhancing the quality of computing education and making it accessible on a larger scale. With a background in Software Engineering and Data Mining, Junaid has published extensively on topics like Evolutionary Algorithms and AI. His decade-long tenure as an Assistant Professor at Namal Institute reflects his commitment to blending global best practices with local educational needs, aiming to reshape the future of computing education in Pakistan."
    },
    {
      id: "senior-8",
      name: "Dr Asghar Dashti",
      profilePicture: "senior-mem7.jpg",
      description: "Dr. Asghar Ali Dashti has been serving the Department of International Relations, Federal Urdu University, Karachi since 2008. He holds a PhD degree on the topic of ‘Pakistan America Military Relations’. He is a research supervisor at Area Study Center for Middle East and Arab Countries, University of Baluchistan, Quetta, and is also the assistant editor of Research journal Wifaqiyan. He is a member of Human Rights Commission of Pakistan (HRCP) and part of Indigenous Rights Alliance (Sindh)."
    },
    {
      id:"senior-9",
      name: "Muhammad Qasim",
      profilePicture: "cc-mem2.jpg",
      description: "Muhammad Qasim is a lecturer of World History at Aitchison College. He previously taught at various universities in Lahore within the Department of Social Science. His research areas include decolonial and critical theory, social movements, and the colonial and postcolonial politics of Punjab."
    },
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
          name: "Sundus Basharat",
          profilePicture: "cc-mem4.jpg",
          description: "Sundus Basharat is a PhD Research Scholar in International Relations at UMT, Lahore, focusing on the role of media in peace and conflict between India and Pakistan. She holds an MPhil with distinction from National Defence University Islamabad and a Master’s in Defence and Strategic Studies from Quaid-e-Azam University. With experience as an Information Analyst and work in think tanks and various educational institutions, she has also completed courses in Peace and Conflict Studies from Tokyo University and Democratic Development from Stanford. Currently based in Karachi, she serves as a Lecturer and Program Manager in International Relations at DHA Suffa University."
        },
        {
          id:"cc-3",
          name: "Farrukh Awan",
          profilePicture: "cc-mem6.jpg",
          description: "Farrukh Ahmad Awan is a Ph.D. scholar at the Department of Political Science and International Relations, University of Management and Technology, Lahore. He is presently working on his doctoral thesis entitled, 'Pakistan-Africa Relations in the Post-Cold War Era: Opportunities and Challenges (1990-2020)' under the supervision of Dr. Muhammad Shoaib Pervez, Associate Professor, Department of Political Science and International Relations, University of Management and Technology, Lahore. After Graduation from Government College University Lahore (GCU), he has done his M.Sc. in Defence and Strategic Studies and M.Phil. in Defence and Strategic Studies in 1995 and 2003 from Quaid¬-i-¬Azam University Islamabad. He also gained MS in Project Management in the year 2020 from UMT. His research areas include; Theoretical Debates of International Relations, National/ International Security, Foreign Policy Analysis, Digital Diplomacy and Peace and Conflict Studies."
        },
        {
          id:"cc-4",
          name: "Maira Asif",
          profilePicture: "cc-mem3.jpg",
          description: "Maira Asif is a gender researcher and development professional with a Fulbright MA in Women's, Gender and sexuality studies from Rutgers University, USA. She is currently working with a research consultancy DevTrio and is also the Asia Regional Coordinator for Women's Living Under Muslim Laws. She can be reached at mairaasifher@gmail.com."
        },
        {
          id:"cc-5",
          name: "Kamran Fiaz",
          profilePicture: "cc-mem5.jpg",
          description: "Muhammad Kamran Fiaz is a PhD Scholar of Political Science with Mphil in South Asian Studies. Currently, he is a visiting lecturer at Bahauddin Zakariya University, Multan, Pakistan. He is interested in interdisciplinary approaches and exploring different social perspectives of decolonisation, modernity, democracy, resistance, harmony, justice and the 'selfhood of societies' (borrowing from Ashis Nandy)."
        },
        {
          id:"cc-6",
          name: "Naima Zia",
          profilePicture: "missing-ajrak.jpg",
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
    
  const inventiveTeam = [
    {
      id: "inventive-mem-1",
      name: "Maryam Aamer",
      description: "Maryam Aamer, an International Relations graduate, exhibits a remarkable ability to analyze and unravel conflicts in both global and everyday contexts. She is deeply committed to personal and collective peacebuilding and liberation, reflecting her strong dedication to community service. Driven by a belief in the transformative power of modern media, Maryam leverages it to drive change and create a meaningful impact in the real world.",
      profilePicture: "it-mem5.jpeg"
    },
  {
    id: "inventive-mem-2",
    name: "Syed Samar Abbas Shirazi",
    description: "A student of International Relations with a keen interest in climate governance, energy sector, and the complexities of foreign policy and international trade. Eager to apply knowledge and skills in real-world settings, contributing meaningfully to global efforts for sustainable development and making a positive impact on society.",
    profilePicture: "it-mem2.jpeg"
  },
  {
    id: "inventive-mem-3",
    name: "Hira Riaz",
    description: "An International Relations student with a robust background in journalism and media. With three years of experience in a media house and currently hosting podcasts at a corporate linkage institute, she skillfully navigates the education beat. Passionate about exploring global perspectives, she leverages her content creation skills to share insights, spark meaningful conversations, and inspire positive change. Fluent in both Urdu and advanced English, she is dedicated to making a significant impact through her work in media and academia.",
    profilePicture: "it-mem3.jpeg"
  },
  {
    id: "inventive-mem-4",
    name: "Urooj Ali",
    description: "A student of BS-International Relations at DHA Suffa University (DSU), deeply passionate about global affairs and communication strategies. Currently serves as a dedicated member of the social media team at the Critical Peace Studies Society (CPSS), effectively managing the online presence and ensuring impactful engagement with the audience. Experienced in navigating high-pressure environments, a strong team player with a keen eye for detail, and committed to excellence.",
    profilePicture: "it-mem4.jpeg"
  },
  {
    id: "inventive-mem-5",
    name: "Ahmad khan",
    description: "Ahmad Khan, with an M.Phil from the University of Management and Technology (UMT), is a dedicated research associate at the Law School, Lahore University of Management Sciences (LUMS). Since August 1, 2018, he has been contributing his expertise and insights to the field of legal research, showcasing his commitment to advancing knowledge and scholarship in the legal domain.",
    profilePicture: "it-mem6.jpeg"
  },
  {
    id: "inventive-mem-6",
    name: "Muhammad Hassan Raja",
    description: "A BS International Relations student with a minor in Economics, focusing on global politics and economic strategies. Research includes analyzing the Kashmir conflict post-Article 370’s revocation. Aims to further specialize through an MBA, with a strong interest in global business.",
    profilePicture: "it-mem1.jpeg"
  }
  ];      

    const allMembers = [...seniorMembers, ...centralCoreCommittee, ...coordinatingCoreCommittee, ...inventiveTeam];

    // Find the member by matching the id
    const member = allMembers.find(m => m.id === params.memberId);

    if (!member) {
    return <p>Member not found</p>;
    }

  return (
    <main className='min-h-screen bg-[#0A0708]'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-x-12 pt-24 md:pt-28 max-md:px-4 max-md:pb-24'>
            <div className="h-80 md:h-96 w-64 md:w-96 border border-[#89BE63] shadow-custom rounded-lg relative overflow-hidden">
                <Image
                src={`/Images/${member.profilePicture}`}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0"
                />
            </div>
            <div className='flex flex-col gap-y-4 max-md:mt-8 max-md:mx-4'>
                <h1 className='text-2xl md:text-3xl font-bold text-[#89BE63] ml-4'>{member.name}</h1>
                <p className='text-base md:text-lg text-white w-64 md:w-[576px] ml-4'>{member.description}</p>
            </div>
        </div>
    </main>
  )
};
