'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHandsHelping, FaNetworkWired, FaPrayingHands, FaUniversity, FaChalkboardTeacher, FaPenNib } from 'react-icons/fa';

const Page = () => {
  const images = [
    '/Images/img9.jpeg',
    '/Images/img10.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [hidden1, setHidden1] = useState(true);

  const [hidden2, setHidden2] = useState(true);


  const toggleParagraph1 = () => {
    setHidden1(!hidden1);
  };

  const toggleParagraph2 = () => {
    setHidden2(!hidden2);
  };

  useEffect(() => {
    const imageToggle = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(imageToggle); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <main className='bg-[#0A0708]'>

        {/* CPSS Information */}
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="w-full">
            <div className='flex flex-col items-start gap-y-4 md:flex-row md:items-center md:justify-between mb-12'>
              <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-[#89BE63] md:text-4xl text-2xl lg:leading-10 leading-9 mt-2">
              The Critical Peace Studies Society (CPSS)
              </h2>
              <div className="relative bg-white overflow-hidden shadow-custom rounded-full w-20 h-20">
                <Image 
                  src="/Images/cpss-logo.png" 
                  alt="event" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="absolute inset-0" 
                />
              </div>
            </div>
            <p className="font-normal text-base leading-6 text-white mt-6">
            The Critical Peace Studies Society (CPSS) is a dynamic community of scholars and activists dedicated to exploring social justice, peace education, peace studies, and international relations as a multidimensional field. This transdisciplinary forum envisions and creates possibilities for the future of education and the world, beginning with a reexamination of the concepts of &apos;I&apos; and &apos;International Relations&apos; from Global South and subaltern perspectives.
            </p>
          </div>

          <div className="lg:mt-14 sm:mt-10 mt-12 relative overflow-hidden w-full h-[400px] sm:h-[500px] lg:h-[384px] rounded-lg shadow-custom">
              <Image 
                src="/Images/img45.jpg" 
                alt="event" 
                fill
                style={{ objectFit: 'cover' }}
                className="absolute inset-0 block" 
              />
          </div>

          <div className="lg:mt-24 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
            <div className="w-full xl:w-5/12 lg:w-6/12">
              <h2 className="font-bold md:text-3xl text-2xl lg:leading-9 leading-7 text-[#89BE63]">
                What We Do
              </h2>
              <p className="font-normal text-base leading-6 text-white mt-4">
              The purpose of creating this transdisciplinary forum is to imagine and create different possibilities for the future of education and the world at large. Believing that change has to begin from within ourselves, we review our notions of &apos;I&apos; and &apos;International Relations&apos; from the Global South/ subaltern perspectives. We aim to explore and reclaim Southern/ subaltern voices and agency in the international, developing worldviews, discourses, and strategies for peaceful futures for ALL. While examining the &lsquo;international&rsquo; from below, we challenge top-down, hegemonic worldviews and narratives.
              </p>
              <p className="font-normal text-base leading-6 text-white mt-6">
              The group invites participation, contributions, suggestions from scholars; activists from different fields who wish imagine and enact a just and peaceful world for all. We especially welcome decolonial/ Southern/ subaltern discourses and practices. 
              </p>
            </div>

            <div className="lg:flex items-center lg:w-1/2 relative overflow-hidden shadow-custom rounded-lg w-full h-[400px] sm:h-[500px] lg:h-[412px]">
              <Image 
                src={images[currentImageIndex]} 
                alt="event" 
                fill
                style={{ objectFit: 'cover' }}
                className="absolute inset-0" 
              />
            </div>
        </div>

        {/* Projects Information */}
        <div className='lg:mt-24 mt-16'>
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-[#89BE63] md:text-3xl text-2xl">
              Our Projects
          </h2>

          {/* project cards div */}
          <div className='flex flex-col gap-y-8 md:flex-row justify-between my-12'>


            {/* first project card */}
            <div className='flex flex-col md:flex-row items-start gap-x-4 p-4 min-h-64 w-64 md:w-[512px] rounded-lg bg-[#1A1A1A] border-[#89BE63] border-2 shadow-custom'>

              {/* image div */}
              <div className='h-56 w-56 md:w-[512px] rounded-lg relative overflow-hidden mt-2'>
                <Image 
                  src="/Images/pluriversity-project.png" 
                  alt="event" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="absolute inset-0" 
                />
              </div>

              {/* text div in the middle */}
              <div className='flex flex-col mt-2'>
                <h1 className="self-center text-lg md:text-xl font-semibold whitespace-nowrap text-white">
                  The Pluriversity <span className="text-xl md:text-2xl">لاھور</span>
                </h1>

                {!hidden1 && (
                  <p className='w-56 mt-4 text-white text-sm'>
                    A locally rooted, globally connected, multilingual educational website and channel that offers a learning space that accepts and respects multiple sources of knowledge. This space offers indigenous research courses, critical reading circles, rich reading and art resources, guest lectures, Gen Z research corner, dialogues on epistemic justice / futures of education and a lot more.
                  </p>
                )}

                <button onClick={toggleParagraph1} className='border border-[#89BE63] text-white text-sm shadow-custom rounded-lg w-24 h-10 mt-12 mb-4'>
                {hidden1 ? 'Read More' : 'Read Less'}
                </button>
              </div>
            </div>


            {/* second project card */}
            <div className='flex flex-col md:flex-row items-start gap-x-4 p-4 min-h-64 w-64 md:w-[512px] rounded-lg bg-[#1A1A1A] border-[#89BE63] border-2 shadow-custom'>

              {/* image div */}
              <div className='h-56 w-56 md:w-[512px] rounded-lg relative overflow-hidden mt-2'>
                <Image 
                  src="/Images/journal-project.png" 
                  alt="event" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="absolute inset-0" 
                />
              </div>

              {/* text div in the middle */}
              <div className='flex flex-col mt-2'>
                <h1 className="self-center text-lg md:text-xl font-semibold whitespace-nowrap text-white">
                Journal of Critical Peace <br />Studies
                </h1>

                {!hidden2 && (
                  <p className='w-56 mt-4 text-white text-sm'>
                    An unconventional academic journal that aims to centre the voices, perspectives and lived experiences of the Global South scholars / racialized, marginalized, colonized communities around the world in Peace Studies/International Relations/ related domains. 
                    The journal of Critical Peace Studies embraces a very broad definition of peace. Peace is viewed as a process and a struggle towards the mitigation of direct, structural, cultural as well as epistemic violence. We view epistemic violence as a key constituent of structural and cultural violence; hence it remains our main area of focus.
                  </p>
                )}

                <button onClick={toggleParagraph2} className='border border-[#89BE63] text-white text-sm shadow-custom rounded-lg w-24 h-10 mt-8 mb-4'>
                {hidden2 ? 'Read More' : 'Read Less'}
                </button>
              </div>
            </div>
  
            

          </div>

        </div>

        {/* Seeking Information */}
        <div className='lg:mt-24 mt-16'>

          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-[#89BE63] md:text-3xl text-2xl mb-12">
              What We Seek At This Stage
          </h2>

          <ul className="list-none text-white">
            <div className="flex flex-wrap -mx-3">
              
              {/* Collaborations */}
              <li className="flex flex-col w-full md:w-1/2 px-3 mb-12">
                <div className="flex items-center">
                  <div className="bg-[#1A1A1A] border border-white shadow-custom rounded-full p-4 mr-4">
                    <FaHandsHelping className="text-[#89BE63] w-6 md:w-8 h-6 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">Collaborations</h3>
                </div>
                <p className="text-sm md:text-base mt-4">Contributions to our projects.</p>
              </li>
              
              {/* Network */}
              <li className="flex flex-col w-full md:w-1/2 px-3 mb-12">
                <div className="flex items-center">
                  <div className="bg-[#1A1A1A] border border-white shadow-custom rounded-full p-4 mr-4">
                    <FaNetworkWired className="text-[#89BE63] w-6 md:w-8 h-6 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">Network</h3>
                </div>
                <p className="text-sm md:text-base mt-4">Join discussions, peer reviews, and present work at our events.</p>
              </li>
              
              {/* Religious Scholars */}
              <li className="flex flex-col w-full md:w-1/2 px-3 mb-12">
                <div className="flex items-center">
                  <div className="bg-[#1A1A1A] border border-white shadow-custom rounded-full p-4 mr-4">
                    <FaPrayingHands className="text-[#89BE63] w-6 md:w-8 h-6 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">Religious Scholars</h3>
                </div>
                <p className="text-sm md:text-base mt-4">Engage in collaboration and mutual learning.</p>
              </li>
              
              {/* Internships */}
              <li className="flex flex-col w-full md:w-1/2 px-3 mb-12">
                <div className="flex items-center">
                  <div className="bg-[#1A1A1A] border border-white shadow-custom rounded-full p-4 mr-4">
                    <FaUniversity className="text-[#89BE63] w-6 md:w-8 h-6 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">Internships</h3>
                </div>
                <p className="text-sm md:text-base mt-4">Opportunities for selected graduate and undergraduate students.</p>
              </li>
              
              {/* Visiting Scholars */}
              <li className="flex flex-col w-full md:w-1/2 px-3 mb-12">
                <div className="flex items-center">
                  <div className="bg-[#1A1A1A] border border-white shadow-custom rounded-full p-4 mr-4">
                    <FaChalkboardTeacher className="text-[#89BE63] w-6 md:w-8 h-6 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">Visiting Scholars</h3>
                </div>
                <p className="text-sm md:text-base mt-4">Participation in programs, seminars, and research.</p>
              </li>
              
              {/* Contributions */}
              <li className="flex flex-col w-full md:w-1/2 px-3 mb-12">
                <div className="flex items-center">
                  <div className="bg-[#1A1A1A] border border-white shadow-custom rounded-full p-4 mr-4">
                    <FaPenNib className="text-[#89BE63] w-6 md:w-8 h-6 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">Contributions</h3>
                </div>
                <p className="text-sm md:text-base mt-4">Involvement by writers, journalists, and artists through creative mediums.</p>
              </li>
            </div>
          </ul>

        </div>


      </div>


    </main>
    
  );
};

export default Page;
