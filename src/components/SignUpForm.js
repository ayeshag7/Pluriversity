"use client";
import React, { useState } from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

// Input Component
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const radius = 100; // Change this to increase the radius of the hover effect
  const [visible, setVisible] = useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            #89BE63,
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <input
        type={type}
        className={`
          flex h-16 w-full border border-[#89BE63] bg-[#1A1A1A] text-white shadow-input rounded-md px-5 py-4 text-lg 
          file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[#89BE63]
          disabled:cursor-not-allowed disabled:opacity-50
          dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400
          ${className}
        `}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});
Input.displayName = "Input";

// Textarea Component with animation
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            #89BE63,
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/textarea"
    >
      <textarea
        className={`
          w-full h-40 border border-[#89BE63] bg-[#1A1A1A] text-white shadow-input rounded-md px-5 py-4 text-lg 
          placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[#89BE63]
          disabled:cursor-not-allowed disabled:opacity-50
          dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/textarea:shadow-none transition duration-400
          ${className}
        `}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});
Textarea.displayName = "Textarea";

// SignUpForm Component
const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0A0708] pt-12 pb-16 w-full">
      <div className="bg-[#0A0708] border border-[#89BE63] shadow-custom p-10 rounded-lg w-full max-w-6xl">
        <form className="space-y-12">
          {/* Row for Name and Affiliation/Location */}
          <div className="flex max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-y-8 md:flex-row md:space-x-8">
            <div className="flex-1">
              <label className="block text-lg font-medium text-white mb-2">
                Name
              </label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-700"
              />
            </div>

            <div className="flex-1">
              <label className="block text-lg font-medium text-white mb-2">
                Affiliation/Location
              </label>
              <Input
                type="text"
                placeholder="Enter your affiliation/location"
                className="border border-gray-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-white mb-2">
              Specific reasons for joining us
            </label>
            <Textarea
              placeholder="Why do you want to join us?"
              className="border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-white mb-4">
              How would you like to contribute to our work?
            </label>
            <div className="space-y-4">
              <label className="block text-base font-medium text-white mb-2">
                <input
                  type="radio"
                  name="contribute"
                  value="Creative Input/Research"
                  className="text-[#89BE63] border-gray-300 focus:ring-[#89BE63] mr-2"
                />
                Creative Input/Research
              </label>

              <label className="block text-base font-medium text-white mb-2">
                <input
                  type="radio"
                  name="contribute"
                  value="Donate/Fund our projects"
                  className="text-[#89BE63] border-gray-300 focus:ring-[#89BE63] mr-2"
                />
                Donate/Fund our projects
              </label>

              <label className="block text-base font-medium text-white mb-2">
                <input
                  type="radio"
                  name="contribute"
                  value="Market your local products"
                  className="text-[#89BE63] border-gray-300 focus:ring-[#89BE63] mr-2"
                />
                Market your local products
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="px-5 py-3 bg-[#89BE63] text-white font-medium rounded-md shadow hover:bg-[#78A656] focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
